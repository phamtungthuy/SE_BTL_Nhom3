import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Home.scss";

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <h1>Welcome to typing Website</h1>
                <div className="typing-image"></div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
