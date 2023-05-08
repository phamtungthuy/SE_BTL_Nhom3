import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../../utils";

import  {handleLogin, createNewUserService}  from '../../services/userService';

import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword:'',
            isShowPassword: false,
            isShowConfirmPassword: false,
            isSignUp: false,
        }
    }

    componentDidUpdate = () => {
        
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
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

    handleOnChangeConfirmPassword = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }


    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleShowHideConfirmPassword = () => {
        this.setState({
            isShowConfirmPassword: !this.state.isShowConfirmPassword
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        console.log(`Email: ${this.state.email}`, `password: ${this.state.password}`);
        console.log(`all state: `, this.state);
        try {
            let data = await handleLogin(this.state.email, this.state.password);
            console.log(data);
            if(data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            } else if(data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                this.props.adminLoginSuccess(data.user);
                this.props.navigate('/system/user-manage');
                console.log('Login succeeds');
            }
        } catch(error) {
            if(error.response) {
                if(error.response.data) {
                    this.setState({
                        errMessage: error.response.data.errMessage
                    })
                }
            }
        }
    }

    handleSignup = async () => {
        console.log(`Email: ${this.state.email}`, `username: ${this.state.username}`,`password: ${this.state.password}`);
        console.log(`all state: `, this.state);
        try {
            let data = await createNewUserService({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            });
            console.log(data);
            if(data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            } else if(data && data.errCode === 0) {
                this.handleClickChangeToSignIn();
            }
        } catch(error) {
            if(error.response) {
                if(error.response.data) {
                    this.setState({
                        errMessage: error.response.data.errMessage
                    })
                }
            }
        }
    }

    handleClickChangeToSignup = () => {
        this.setState({
            errMessage: '',
            isSignUp: true,
            isShowPassword: false,
            isShowConfirmPassword: false
        })
    }

    handleClickChangeToSignIn = () => {
        this.setState({
            errMessage: '',
            isSignUp: false,
            isShowPassword: false
        })
    }

    render() {

        return (
            <div className='login-background'>
                <div className='login-container' style={this.state.isSignUp ? {height: '550px'} : {height: ' 450px'}}>
                    <div className ="login-content row">
                        <div className = "col-12 text-login">{this.state.isSignUp ? 'Sign Up' : 'Login'}</div>
                        <div className='col-12 form-group login-input'>
                            <label>Email:</label>
                            <input type = "text" 
                            className='form-control' 
                            placeholder ="Enter your email"
                            onChange = {(event) => this.handleOnChangeEmail(event) }
                            />
                        </div>
                        {this.state.isSignUp && <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type = "text" 
                            className='form-control' 
                            placeholder ="Enter your username"
                            onChange = {(event) => this.handleOnChangeUsername(event) }
                            />
                        </div>}
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
                        {this.state.isSignUp && <div className='col-12 form-group login-input'>
                            <label>Confirm password</label>
                            <div className = "custom-input-password">
                                <input type = {this.state.isShowConfirmPassword ? 'text' : 'password'}
                                className='form-control' 
                                placeholder ="Enter your password again"
                                onChange = {(event) => this.handleOnChangeConfirmPassword(event)}
                                />
                                <span onClick = {() => {this.handleShowHideConfirmPassword()}}>
                                    <i className= {this.state.isShowConfirmPassword ? "fa-solid fa-eye" : "fa-sharp fa-solid fa-eye-slash"}></i>
                                </span>
                            </div>
                            
                        </div>}
                        
                        <div className = "col-12" style = {{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            {this.state.isSignUp ? 
                            <button className='btn-login' onClick = {() => {this.handleSignup()}}>
                                Signup
                            </button> 
                            : <button className='btn-login' onClick = {() => {this.handleLogin()}}>
                                Login
                            </button>}
                            
                            
                        </div>

                        <div className="col-12 text-center">
                                {!this.state.isSignUp ? (<span>Don't have an account? <a style={{color: 'blue', cursor: "pointer"}} onClick={this.handleClickChangeToSignup}>Sign up</a></span>) :  <span>Already have an account? <a style={{color: 'blue', cursor: "pointer"}} onClick={this.handleClickChangeToSignIn}>Sign in</a></span>}
                                
                               
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
        lang: state.app.language,
        isLoggedInAdmin: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        adminLoginSuccess: (userInfo) => dispatch(actions.adminLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
