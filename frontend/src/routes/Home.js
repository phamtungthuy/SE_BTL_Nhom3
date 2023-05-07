import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Route, Switch } from 'react-router-dom';
import './Home.scss';
import { path } from '../utils';
import * as actions from '../store/actions';
import Practice from './Practice';
import Test from './Test';
import Typing from './Typing';
import Record from './Record';
import HomePage from './HomePage';
import AboutUs from './AboutUs';

class Home extends Component {
    constructor(props) {
        super(props);

    }



    HandleClickLogout = () => {
        this.props.userLogout();
    }

    render() {

        return (
            <div className="page">
                <nav className="header">
                    <div className='logo' onClick={() => this.props.setCurrentComponent(<HomePage />, 'HomePage')}>
                        <div className='circle'>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                        </div>
                        <p className="home">Go10ngon</p>
                    </div>
                    {!this.props.isLoggedIn && (<a href='/login'>
                        <i className="fas fa-user-circle login"></i>
                    </a>)}
                    
                    {this.props.isLoggedIn && (<div className="loggedIn-user">
                        <span>{this.props.userInfo.name}</span>
                        <i class="fas fa-user-circle login" onClick={this.HandleClickLogout}></i>
                    </div>)}
                </nav>

                <div className="body-container" isOpen = {false}>
                    <div className="navigation">
                        <ul>
                            <li onClick={() => this.props.setCurrentComponent(<Typing />, 'Typing')} className = {this.props.currentActive == 'Typing' ? 'active' : ''}>
                                <h4>TYPING</h4>
                            </li>

                            {this.props.isLoggedIn ?
                            <li onClick={() => this.props.setCurrentComponent(<Test />, 'Test')} className = {this.props.currentActive == 'Test' ? 'active' : ''}>
                                <h4>TEST</h4>
                            </li>
                            : <li><h4><br/></h4></li>}

                            {this.props.isLoggedIn ?
                                <li onClick={() => this.props.setCurrentComponent(<Practice />, 'Practice')} className = {this.props.currentActive == 'Practice' ? 'active' : ''}>
                                <h4>PRACTICE</h4>
                            </li>
                            : <li><h4><br/></h4></li>}
                            
                            <li onClick={() => this.props.setCurrentComponent(<Record />, 'Record')} className = {this.props.currentActive == 'Record' ? 'active' : ''}>
                                <h4>RECORD</h4>
                            </li>
                            <li>
                                <div className = "AboutUs" onClick={() => this.props.setCurrentComponent(<AboutUs />, 'About')}>
                                    About us
                                </div>
                                <div className="contact">
                                    <a href="https://discord.com/"><i class="fab fa-github"></i></a>
                                    <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="body-content">
                        <Switch>
                            <Route render={() => this.props.currentComponent} />
                        </Switch>
                       
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        currentComponent: state.component.currentComponent,
        currentActive: state.component.currentActive
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLogout: () => dispatch(actions.processLogout()),
        returnHomePage: () => dispatch(actions.returnHomePage()),
        setCurrentComponent: (component, name) => dispatch(actions.setCurrentComponent(component, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
