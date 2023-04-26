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
import HomePage from './HomePage';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: <HomePage/>,
            currentActive: null,
            shouldRedirectToLogin: false,
        
        };
    }

    setCurrentComponent(component, name) {
        this.setState({
            currentComponent: component,
            currentActive: name
        })
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
          if (action === 'POP') {
            window.location.reload();
            console.log('hello');
          }
        });
      }
      
      componentWillUnmount() {
        window.history.back();
      }
      

    render() {
        if(this.state.shouldRedirectToLogin) {
            this.setState({
                shouldRedirectToLogin: false
            })
            return <Redirect to="/login" />;
        }
        return (
            <div className="page">
                <nav className="header">
                    <div className='logo'>
                        <div className='circle'>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                        </div>
                        <p className="home">Go10ngon</p>
                    </div>
                    <i className="fas fa-sign-in-alt login" onClick = {() => {this.setState({shouldRedirectToLogin: true})}}></i>
                </nav>

                <div className="body-container" isOpen = {false}>
                    <div className="navigation">
                        <ul>
                            <li onClick={() => this.setCurrentComponent(<Typing />, 'Typing Test')} className = {this.state.currentActive == 'Typing' ? 'active' : ''}>
                                Typing
                                <i className="far fa-keyboard"></i>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Practice />, 'Practice')} className = {this.state.currentActive == 'Practice' ? 'active' : ''}>
                                Practice
                                <i className="fas fa-paragraph"></i>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Test />, 'Test')} className = {this.state.currentActive == 'Test' ? 'active' : ''}>
                                Test
                                <i className="fal fa-typewriter"></i>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Record />, 'Record')} className = {this.state.currentActive == 'Record' ? 'active' : ''}>
                                Record
                                <i className="far fa-clipboard-user"></i>   
                            </li>
                            <li className="aboutus" onClick={() => this.setCurrentComponent()}>About us</li>
                            <li className="help" onClick={() => this.setCurrentComponent()}>Help</li>
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
