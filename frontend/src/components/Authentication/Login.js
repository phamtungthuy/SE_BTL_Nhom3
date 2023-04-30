import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../../utils";


import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    componentDidUpdate = () => {
        console.log('hello');
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }



    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleLogin = () => {
        this.props.userLoginSuccess({});
        this.props.navigate('/');
    }

    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className ="login-content row">
                        <div className = "col-12 text-login">Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type = "text" 
                            className='form-control' 
                            placeholder ="Enter your username"
                            onChange = {(event) => this.handleOnChangeUsername(event) }
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className = "custom-input-password">
                                <input type = {this.state.isShowPassword ? 'text' : 'password'}
                                className='form-control' 
                                placeholder ="Enter your password"
                                onChange = {(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick = {() => {this.handleShowHidePassword()}}>
                                    <i className= {this.state.isShowPassword ? "fa-solid fa-eye" : "fa-sharp fa-solid fa-eye-slash"}></i>
                                </span>
                            </div>
                        </div>
                        <div className = "col-12" style = {{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick = {() => {this.handleLogin()}}>
                                Login
                            </button>
                        </div>
                        <div className='col-12 text-right'>
                            <span className = "forgot-password">Forgot your password?</span>
                        </div>

                        <div className="col-12 text-center mt-3">
                            <span className='text-other-login'>Or Login with: </span>
                        </div>
                        <div className ="col-12 social-login">
                            <i className="fa-brands fa-facebook-f facebook"></i>
                            <i className="fa-brands fa-twitter twitter"></i>
                            <i className="fa-brands fa-google-plus-g google"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
