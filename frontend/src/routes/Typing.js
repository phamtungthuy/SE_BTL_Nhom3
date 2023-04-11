import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils'
import './Typing.scss'
class Typing extends Component {

    render() {
        return (
            <Fragment>
                <div className='paragraph-container'>
                    <p>paragraph</p>
                </div>
                <div className='typing'>
                    <input />
                </div>
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Typing);
