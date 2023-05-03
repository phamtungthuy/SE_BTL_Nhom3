import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils'
import './Typing.scss'
import CustomParagraphs from './CustomParagraphs';
import {emitter} from '../utils/emitter'
import Result from './Result';
import * as actions from '../store/actions/index';
import {getParagraphs, getTestParagraphs} from '../services/otherService';
class Typing extends Component {
    constructor(props) {
        super(props);
        this.spanRef = [];
        this.divRef = React.createRef();
        this.wrongWords = [];
        this.paragraphs = [];
    }



    reloadState = async (isRandom=true) => {
        if(this.timerID) {
            clearInterval(this.timerID);
        }
        await this.props.reloadWPM();
        if(isRandom) {
            await this.props.getRandomParagraph();
        }
       await this.props.reloadTypingState(this.props.paragraph.currentParagraph);
        this.wrongWords = [];
        let length = this.props.typing.words.length;
        for (let i = 0; i < length; i++) {
            this.spanRef.push(React.createRef());
        }
    }

    componentDidMount = async () => {
        let object;
        if(this.props.type == 'test') {
            object = await getTestParagraphs(this.props.language, this.props.level);
        } else {
            object = await getParagraphs();
        }
        // console.log(object);
        this.paragraphs = object.paragraphs.map(paragraph => paragraph.content);
        await this.props.setParagraphs(this.paragraphs);
        this.reloadState();
        
    }

    componentDidUpdate = () => {
        const div = this.divRef.current;
        if(div && div.offsetWidth !== this.props.typing.currentWidth) {
            let line = -1;
            for(let i = 0; i < this.props.typing.currentWord - 1; i++) {
                let span = this.spanRef[i].current;
                if(span && span.offsetLeft == 0) {
                    ++line;
                }
            }
            this.props.adaptScreenWidth(div.offsetWidth, -55 * (line >= 0 ? line : 0));
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    getTimer = () => {
        let minute = Math.floor(this.props.typing.timeLeft / 60);
        let second = this.props.typing.timeLeft % 60;
        if(second < 10) second = "0" + second;
        return (minute + ":" + second);
    }

    handleOnChange = async (event) => {
        
        if(event.target.value.search(' ') != -1) {
            if(event.target.value.search(' ') == 0) {
                event.target.value = '';
                return;
            }
            event.target.value = event.target.value.slice(0, -1);
            if(event.target.value !== this.props.typing.words[this.props.typing.currentWord]) {
                this.wrongWords.push(this.props.typing.currentWord);
                this.props.increaseWrongWords();
            } else {
                this.props.increaseCorrectWords();
            }
            this.props.nextWord();
            if(this.props.typing.currentWord + 1< this.spanRef.length) {
                const span = this.spanRef[this.props.typing.currentWord + 1].current;
                if(span) {
                    if(span.offsetLeft == 0) {
                        this.props.setPosition();
                    }
    
                }
                return;
    
            }
        } else {
            this.props.setInputValue(event.target.value)
        }

        if(!this.props.typing.isStartedTime) {
            this.props.startTyping();
            this.timerID = setInterval(() => {
                if(this.props.typing.timeLeft > 0) {
                    this.props.decreaseTimeLeft();
                }
                
                }, 1000);
        }
    }
    

    render() {
        if(this.props.typing.editable) {
            return <CustomParagraphs
                reloadState = {this.reloadState}
            />
        }
        if(this.props.typing.timeLeft <= 0) {
            return (<Result 
                reloadState={this.reloadState}
            />);
        }
        return  (


            <div className="typing-container">
                <div className='paragraph-container'>
                    {this.props.type == 'practice' && <i className="fas fa-edit" onClick ={this.props.enableEditParagraph}></i>}
                    <div className="words" ref={this.divRef}>
                        <div className="word-row"  style={{ position: 'relative', top: `${this.props.typing.top}px` }}>
                        {this.props.typing.words.map((word, index) => {
                            if(index < this.props.typing.currentWord) return <span key = {index}className={this.wrongWords.includes(index) ? 'wrong' : 'finished-word'} ref={this.spanRef[index]}>{word}</span>
                            else if(index == this.props.typing.currentWord) return <span key ={index}className='current-word' ref = {this.spanRef[index]}>{word}</span>
                            return <span key = {index} ref={this.spanRef[index]}>{word}</span>
                        })}
                        </div>
                        
                    </div>
                    
                </div>
                <div className='input'>
                    <div className = "input-container">
                        <input value ={this.props.typing.inputValue} onChange={this.handleOnChange}/>
                        <button>{this.getTimer()}</button>
                        <button className ="reload" onClick ={this.reloadState}><i class="fas fa-sync-alt"></i></button>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        typing: state.typing,
        paragraph: state.paragraph

    };
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCorrectWords: () => dispatch(actions.increaseCorrectWords()),
        increaseWrongWords: () => dispatch(actions.increaseWrongWords()),
        reloadWPM: () => dispatch(actions.reloadWPM()),
        reloadTypingState: (paragraph) => dispatch(actions.reloadTypingState(paragraph)),
        adaptScreenWidth: (width, top) => dispatch(actions.adaptScreenWidth(width, top)),
        nextWord: () => dispatch(actions.nextWord()),
        setPosition:() => dispatch(actions.setPosition()),
        startTyping: () => dispatch(actions.startTyping()),
        setInputValue: (inputValue) => dispatch(actions.setInputValue(inputValue)),
        decreaseTimeLeft: () => dispatch(actions.decreaseTimeLeft()),
        setParagraphs: (paragraphs) => dispatch(actions.setParagraphs(paragraphs)),
        getRandomParagraph: () => dispatch(actions.getRandomParagraph()),
        enableEditParagraph: () => dispatch(actions.enableEditParagraph()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Typing);
