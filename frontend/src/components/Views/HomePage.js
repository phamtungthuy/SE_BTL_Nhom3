import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./HomePage.scss";
import heroImage from "../../assets/images/heroImage.jpg"
import timer from "../../assets/images/timer.png"
import file from "../../assets/images/file.png"
import growGraph from "../../assets/images/growth-graph.png"

class HomePage extends Component {
  render() {
    return (
      <>
        <section id="hero">
            <div class="left-section">
                <h1>Master Your Typing Skills in 1 minute</h1>
                <p class="subtitle">We have large variety of test and practice sessions which you can perform to practice and test your typing skills. Based on your performance your report will be generated.</p>
            </div>
            <div class="right-section">
                <img src={heroImage} alt="Woman Typing"/>
            </div>
        </section>

        <section id="features">
            <div class="feature">
                <img src={timer} alt="Time Based Practice Sessions"/>
                <h3>Time Based Practice</h3>
                <p>You can quantify your skills in a certain interval of time by using timed practise and testing sessions.</p>
            </div>
            <div class="feature">
                <img src={file} alt="Paragraph Based Practice Sessions"/>
                <h3>Paragraph Based Practice</h3>
                <p>You can assess your typing abilities without any time constraints with a paragraph-based session. </p>
            </div>
            <div class="feature">
                <img src={growGraph} alt="Difficulty and Case Selection Sessions"/>
                <h3>Difficulty and Case Selection</h3>
                <p>There are several alternatives available to test your typing abilities based on the amount of difficulty you choose.</p>
            </div>
        </section>
      </>
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
