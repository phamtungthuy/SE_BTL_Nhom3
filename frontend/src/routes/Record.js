import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils';
import { Table } from 'reactstrap';
import './Record.scss';


class Record extends Component {
    render() {
        return (
        <Table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>WPM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>53</td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>53</td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>53</td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>53</td>
              </tr>
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
