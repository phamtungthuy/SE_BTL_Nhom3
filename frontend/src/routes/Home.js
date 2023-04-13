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

    setCurrentComponent(component, name) {
        this.setState({
            currentComponent: component,
            currentActive: name
        })
    }
    render() {
        return (
            <div className = "page">
                <div className="header"></div>
                <div className="body-container">
                    <div className="navigation">
                        <ul>
                            <li onClick={() => this.setCurrentComponent(<Typing />, 'Typing')} className = {this.state.currentActive == 'Typing' ? 'active' : ''}>
                                <span>Typing</span>
                                <i class="fas fa-chevron-right"></i></li>
                            <li onClick={() => this.setCurrentComponent(<Practice />, 'Practice')} className = {this.state.currentActive == 'Practice' ? 'active' : ''}>
                                Practice
                                <i class="fas fa-chevron-right"></i></li>
                            <li onClick={() => this.setCurrentComponent(<Test />, 'Test')} className = {this.state.currentActive == 'Test' ? 'active' : ''}>
                                Test
                                <i class="fas fa-chevron-right"></i>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Record />, 'Record')} className = {this.state.currentActive == 'Record' ? 'active' : ''}>
                                Record
                                <i class="fas fa-chevron-right"></i>    
                            </li>
                        </ul>
                    </div>
                    <div className="body-content">
                        <Switch>
                            <Route render={() => this.state.currentComponent} />
                        </Switch>
                    </div>
                </div>
                <div className="footer">
                    <ul>
                        <li onClick={() => this.setCurrentComponent()}>About us</li>
                        <li onClick={() => this.setCurrentComponent()}>Contact us</li>
                        <li onClick={() => this.setCurrentComponent()}>Support</li>
                        <li onClick={() => this.setCurrentComponent()}>Terms</li>
                        <li onClick={() => this.setCurrentComponent()}>Github</li>
                        <li onClick={() => this.setCurrentComponent()}>Discord</li>
                        <li onClick={() => this.setCurrentComponent()}>Twitter</li>
                        <li onClick={() => this.setCurrentComponent()}>Security</li>
                        <li onClick={() => this.setCurrentComponent()}>Privacy</li>
                        <li onClick={() => this.setCurrentComponent()}>Questions</li>
                    </ul>
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
