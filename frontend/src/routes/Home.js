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
            currentComponent: null
        };
    }

    handleClickTyping = () => {
        this.setState({currentComponent: <Typing />});
    }
    handleClickPractice = () => {
        this.setState({currentComponent: <Practice />});
    }
    handleClickTest = () => {
        this.setState({currentComponent: <Test />});
    }
    handleClickRecord = () => {
        this.setState({currentComponent: <Record />});
    }
    render() {
        return (
            <div>
                <div className="header"></div>
                <div className="body-container">
                    <div className="navigation">
                        <ul>
                            <li onClick={this.handleClickTyping}>Typing</li>
                            <li onClick={this.handleClickPractice}>Practice</li>
                            <li onClick={this.handleClickTest}>Test</li>
                            <li onClick={this.handleClickRecord}>Record</li>
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
