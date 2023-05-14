import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../../utils';
import { Table } from 'reactstrap';
import './Record.scss';
import { getAllRecords } from '../../services/otherService';
import * as actions from '../../store/actions/index';


class Record extends Component {
  constructor(props) {
    super(props);
    this.state={
        option: '',
        errMessage: ''
    }
}

  componentDidMount =  async() => {

    let records = await getAllRecords();
    this.props.updateRecords(records.records);
    this.setState({
      option: '',
      errMessage: '',
      isShow: false
    })
  }



handleOptionChange = (event) => {
    this.setState({
        option: event.target.value
    })
}


handleSubmit = (event) => {
    event.preventDefault();
    
    if(!this.state.option) {
        this.setState({
            errMessage: 'Language and Level must be required'
        });
        return;
    }
    this.setState({
      isShow: true
    })
    if(this.state.option == 'wpm') {
      this.props.sortByWPM();
    } else {
      this.props.sortByScore();
    }
}


  render() {

        if(!this.state.isShow) {
          return (<form className="specify-test" onSubmit={this.handleSubmit}>
          <h1>Option</h1>
          <div class="md-chips">
              <input value="wpm" onChange={this.handleOptionChange} name="foo" type="radio" id="1"/> 
              <label for="1" class="md-chip md-chip-clickable md-chip-hover">WPM</label>
              <input value="score" onChange={this.handleOptionChange} name="foo" type="radio" id="2"/> 
              <label for="2" class="md-chip md-chip-clickable md-chip-hover">Score</label>
          </div>
          <br></br>
          {this.state.errMessage}
          <br></br>
          <button type="submit" className='submit-button'>Show Record</button>
      </form>)
        }
        return (
        <Table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                {this.state.option == 'wpm' ? <th>Highest WPM</th> : <th>Total Score</th>}
               
                
              </tr>
            </thead>
            <tbody>
              {this.props.records.map((record, index) => {
                  return <tr >
                    <td scope="row">{index + 1}</td>
                    <td>{record.username}</td>
                    {this.state.option == 'wpm' ? <td>{record.highest_wpm}</td>:  <td>{record.total_score}</td>}
                    
                   
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
      updateRecords: (records) => dispatch(actions.updateRecords(records)),
      sortByWPM: () => dispatch(actions.sortByWPM()),
      sortByScore: () => dispatch(actions.sortByScore())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
