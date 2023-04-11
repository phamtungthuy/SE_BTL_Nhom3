import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './Home.scss';
import { path } from '../utils';
import Practice from './Practice';
import Test from './Test';
import Typing from './Typing';
import Record from './Record';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: null,
            currentActive: null
        };
    }

    handleClickTyping = () => {
        this.setState({
            currentComponent: <Typing />,
            currentActive: 'Typing'
        });
    }
    handleClickPractice = () => {
        this.setState({
            currentComponent: <Practice />,
            currentActive: 'Practice'
        });
    }
    handleClickTest = () => {
        this.setState({
            currentComponent: <Test />,
            currentActive: 'Test'
        });
    }
    handleClickRecord = () => {
        this.setState({
            currentComponent: <Record />,
            currentActive: 'Record'
        });
    }
    render() {
        return (
            <div>
                <div className="header"></div>
                <div className="body-container">
                    <div className="navigation">
                        <ul>
                            <li onClick={this.handleClickTyping} className = {this.state.currentActive == 'Typing' ? 'active' : ''}>Typing</li>
                            <li onClick={this.handleClickPractice} className = {this.state.currentActive == 'Practice' ? 'active' : ''}>Practice</li>
                            <li onClick={this.handleClickTest} className = {this.state.currentActive == 'Test' ? 'active' : ''}>Test</li>
                            <li onClick={this.handleClickRecord} className = {this.state.currentActive == 'Record' ? 'active' : ''}>Record</li>
                        </ul>
                    </div>
                    <div className="body-content">
                        <Switch>
                            <Route render={() => this.state.currentComponent} />
                        </Switch>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
