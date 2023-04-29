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
                    <a href='/login'><i class="fas fa-user-circle login"></i></a>
                    
                </nav>

                <div className="body-container" isOpen = {false}>
                    <div className="navigation">
                        <ul>
                            <li onClick={() => this.setCurrentComponent(<Typing />, 'Typing')} className = {this.state.currentActive == 'Typing' ? 'active' : ''}>
                                <h4>TYPING</h4>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Test />, 'Test')} className = {this.state.currentActive == 'Test' ? 'active' : ''}>
                                <h4>TEST</h4>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Practice />, 'Practice')} className = {this.state.currentActive == 'Practice' ? 'active' : ''}>
                                <h4>PRACTICE</h4>
                            </li>
                            <li onClick={() => this.setCurrentComponent(<Record />, 'Record')} className = {this.state.currentActive == 'Record' ? 'active' : ''}>
                                <h4>RECORD</h4>
                            </li>
                            <li className="footer">
                                About us
                                <br/>
                                Help
                                <br/>
                                Discord
                                <br/>
                                Policy
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
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
