import React, { Component } from 'react';
import './AboutUs.scss';

class AboutUs extends Component {
    render () {
        return (
            <div class="about">
                <h1 className="aboutHeading">About</h1>
                <p className="para">
                    <span>Go10ngon</span> is an open-source project created by <i>Nhom3</i>.
                    The purpose of this community project is to collaborate with web developers from around the world.
                    We aim to build a valuable tool to practice and improve typing skills. Which will help you in further coding and in many government exams.
                    If you want to contribute to our project, click on the <i>GitHub</i> link at the bottom left of the page.
                </p>
                <br/>
                <h1 className="aboutHeading">How it works</h1>
                <p className="para">
                    To test your skills smash the practice button then first sign in. You will then be prompted to type a series of random characters.
                    To advance to the next section, enter the correct characters and press the space bar. Your final score will be displayed when you finish.
                </p>
            </div>
        );
    }
}

export default AboutUs;