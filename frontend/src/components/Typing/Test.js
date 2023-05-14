import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typing from './Typing'
import './Test.scss';
import HomePage from '../../components/Views/HomePage';
import { push } from "connected-react-router";
import * as actions from '../../store/actions';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            isStarted: false,
            level: "Beginner",
            language: 'Vietnamese',
            errMessage: ''
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
        console.log(event.target.value);
    }

    handleLanguageChange = (event) => {
        this.setState({
                language: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(!this.state.language || !this.state.level) {
            this.setState({
                errMessage: 'Language and Level must be required'
            });
            return;
        }
        this.setState({
            isStarted: true
        })
    }

    handleCancel = () => {
        this.props.returnHomePage();
    }

    render() {

        if(!this.state.isStarted && !this.state.isExist) {
            return (
                <form className="specify-test" onSubmit={this.handleSubmit}>
                    <h1>Level</h1>
                    <div class="md-chips">
                        <input value="Beginner" onChange={this.handleLevelChange} name="foo" type="radio" id="1"/> 
                        <label for="1" class="md-chip md-chip-clickable md-chip-hover">Beginner</label>
                        <input value="Intermediate" onChange={this.handleLevelChange} name="foo" type="radio" id="2"/> 
                        <label for="2" class="md-chip md-chip-clickable md-chip-hover">Intermediate</label>
                        <input value="Advanced" onChange={this.handleLevelChange} name="foo" type="radio" id="3"/>
                        <label for="3" class="md-chip md-chip-clickable md-chip-hover">Advanced</label>
                    </div>
                    <h1 className="Language">Language</h1>
                    <div class="md-chips">
                        <input value="Vietnamese" onChange={this.handleLanguageChange} name="too" type="radio" id="4"/> 
                        <label for="4" class="md-chip md-chip-clickable md-chip-hover">Vietnamese</label>
                        <input value="English" onChange={this.handleLanguageChange} name="too" type="radio" id="5"/> 
                        <label for="5" class="md-chip md-chip-clickable md-chip-hover">English</label>
                    </div>
                    {this.state.errMessage}
                    <button type="submit" className='submit-button'>Start</button>
                    <button type ='' onClick={this.handleCancel} className='cancel-button'>Cancel</button>
                </form>
            )
        }

        return (
            <Typing
                type='test'
                language={this.state.language}
                level={this.state.level}
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
        navigate: (path) => dispatch(push(path)),
        returnHomePage: () => dispatch(actions.returnHomePage()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
