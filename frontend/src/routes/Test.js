import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils'
import Typing from './Typing'
import './Test.scss';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            isStarted: false,
            level: "beginner",
            language: 'english'
        }
    }

    componentDidMount = () => {
        this.setState({
            level: '',
            language: ''
        })
    }

    handleLevelChange = (event) => {
        this.setState({
                level: event.target.value
        })
    }

    handleLanguageChange = (event) => {
        this.setState({
                language: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.setState({
        //     isStarted: true
        // })
    }

    render() {

        if(!this.state.isStarted) {
            return (
                <div className="test-container">


                <form onSubmit={this.handleSubmit} className="test-form">
                    <h2 className="form-title">Start your test</h2>
                    <div className="level">
                        <label><b>Level:</b></label>
                        <select value={this.state.level} onChange={this.handleLevelChange}>
                            <option value="">--Select level--</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="language">
                        <label ><b>Language:</b></label>
                        <select value={this.state.level} onChange={this.handleLevelChange}>
                            <option value="">--Select level--</option>
                            <option value="english">English</option>
                            <option value="vietnamese">Vietnamese</option>
                        </select>
                    </div>
                    <button type="submit" className='submit-button'>Start</button>
                </form>
                </div>
            )
        }

        return (
                <Typing

                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
