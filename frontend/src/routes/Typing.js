import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils'
import './Typing.scss'
class Typing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque optio eius temporibus ea nulla, praesentium illo, obcaecati distinctio nemo qui labore harum vero aliquid fugiat necessitatibus totam dicta facere error?",
            start: 0,
            end: 0,
            iterator: 0,
            range: 100,
            timeLeft: 60
        }
    }
    componentDidMount = () => {
        this.setState({
            Paragraph: this.state.Paragraph + " ",
            end: this.state.Paragraph.indexOf(' ', this.state.range)
        })
        this.timerID = setInterval(() => {
            if(this.state.timeLeft > 0) {
                this.setState({
                    timeLeft: this.state.timeLeft - 1
                  });
            } else {
                this.setState({
                    timeLeft: 60
                })
            }
            
          }, 1000);
    }

    componentDidUpdate = () => {
        if(this.state.iterator >= this.state.end && this.state.end < this.state.Paragraph.length) {
            let oldStart = this.state.start;
            let oldEnd = this.state.end;
            let newPosition = this.state.Paragraph.indexOf(' ', oldEnd + this.state.range);
            if(newPosition != -1) {
                this.setState({
                    start: oldEnd, 
                    end: newPosition
                })
            } 

        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    getTimer = () => {
        let minute = Math.floor(this.state.timeLeft / 60);
        let second = this.state.timeLeft % 60;
        if(second < 10) second = "0" + second;
        return (minute + ":" + second);
    }

    handleOnChange = (event) => {
        if(event.target.value.search(' ') != -1) {
            if(event.target.value.search(' ') == 0) {
                event.target.value = '';
                return;
            }
            let nextPosition = this.state.Paragraph.indexOf(' ', this.state.iterator + 1);
            if(nextPosition != -1) {
                this.setState({
                    iterator: nextPosition
                })
            }
             else {
                this.setState({
                    iterator: this.state.end

                })
            }

            event.target.value = '';
        }
    }
    render() {
        return (
            <Fragment>
                <div className='paragraph-container'>
                    <p><span className='finished'>{this.state.Paragraph.substring(this.state.start, this.state.iterator)}</span>{this.state.Paragraph.substring(this.state.iterator, this.state.end)}</p>
                    <p></p>
                </div>
                <div className='typing'>
                    <div className = "typing-container">
                        <input onChange={this.handleOnChange}/>
                        <button>{this.getTimer()}</button>
                        <button className ="reload"><i class="fas fa-sync-alt"></i></button>
                    </div>
                    
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
