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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: <HomePage/>,
            currentActive: null
        
        };
    }

    setCurrentComponent(component, name) {
        this.setState({
            currentComponent: component,
            currentActive: name
        })
    }

    HandleClickLogout = () => {
        this.props.userLogout();
    }

    render() {

        return (
            <div className="page">
                <nav className="header">
                    <div className='logo' onClick={() => this.setCurrentComponent(<HomePage />, 'HomePage')}>
                        <div className='circle'>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                        </div>
                        <p className="home">Go10ngon</p>
                    </div>
                    {!this.props.isLoggedIn && (<a href='/login'>
                        <i className="fas fa-sign-in-alt login"></i>
                    </a>)}
                    
                    {this.props.isLoggedIn && (<div className="loggedIn-user">
                        <i class="fas fa-user-circle login"></i>
                        <span>Username</span>
                        <i class="fas fa-sign-out-alt" onClick={this.HandleClickLogout}></i>
                    </div>)}
                </nav>

                <div className="body-container" isOpen = {false}>
                    <div className="navigation">
                        <ul>
                            <li onClick={() => this.setCurrentComponent(<Typing />, 'Typing')} className = {this.state.currentActive == 'Typing' ? 'active' : ''}>
                                <h4>TYPING</h4>
                            </li>
                            {this.props.isLoggedIn && <li onClick={() => this.setCurrentComponent(<Test />, 'Test')} className = {this.state.currentActive == 'Test' ? 'active' : ''}>
                                <h4>TEST</h4>
                            </li>}
                            {
                                this.props.isLoggedIn &&
                                <li onClick={() => this.setCurrentComponent(<Practice />, 'Practice')} className = {this.state.currentActive == 'Practice' ? 'active' : ''}>
                                <h4>PRACTICE</h4>
                            </li>
                            }
                            
                            <li onClick={() => this.setCurrentComponent(<Record />, 'Record')} className = {this.state.currentActive == 'Record' ? 'active' : ''}>
                                <h4>RECORD</h4>
                            </li>
                            <li className="footer">
                                <span>About us</span>
                                <span><i class="fas fa-hands-helping"></i>Help</span>
                                <span><a href="https://discord.com/"><i class="fab fa-discord"></i>Discord</a></span>
                                <span><a href="https://twitter.com/"><i class="fab fa-twitter"></i>Twitter</a></span>
                                <span><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i>Facebook</a></span>
                                <span><i class="fas fa-book"></i>Policy</span>
                            </li>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLogout: () => dispatch(actions.processLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
