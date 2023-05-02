import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils';
import { Table } from 'reactstrap';
import './Record.scss';
import { getAllRecords } from '../services/otherService';


class Record extends Component {
  constructor(props) {
    super(props);
    this.state={
      records: []
    }
  }

  componentDidMount =  async() => {
    let records_tmp = await getAllRecords();
    let records = [];
    for(let i = 0; i < records_tmp.records.length; i++) {
      records.push({
        username: records_tmp.records[i].Typing.User.name,
        highest_wpm: records_tmp.records[i].highest_wpm,
        total_score: records_tmp.records[i].total_score,
      
      })
    }
    console.log('tmp: ', records_tmp);
    console.log('records: ', records);
    this.setState({
      records: records
    })
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
              {
                this.state.records.map((record, index) => {
                  return <tr >
                    <td scope="row">{index + 1}</td>
                    <td>{record.username}</td>
                    <td>{record.highest_wpm}</td>
                    <td>{record.total_score}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
