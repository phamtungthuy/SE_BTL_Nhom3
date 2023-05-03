import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils';
import { Table } from 'reactstrap';
import './Record.scss';
import { getAllRecords } from '../services/otherService';
import * as actions from '../store/actions/index';


class Record extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount =  async() => {
    let records = await getAllRecords();
    this.props.updateRecords(records.records);

  }

  render() {
        return (
        <Table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Highest WPM</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
              {this.props.records.map((record, index) => {
                  return <tr >
                    <td scope="row">{index + 1}</td>
                    <td>{record.username}</td>
                    <td>{record.highest_wpm}</td>
                    <td>{record.total_score}</td>
                  </tr>
                })}

            </tbody>
          </Table>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        records: state.record.records
    };
};

const mapDispatchToProps = dispatch => {
    return {
      updateRecords: (records) => dispatch(actions.updateRecords(records))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
