import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../utils'
import './Typing.scss'
import CustomParagraphs from './CustomParagraphs';
import {emitter} from '../utils/emitter'
class Typing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Paragraph: "Cách hiểu thứ nhất (đoạn ý): Đoạn văn được dùng với ý nghĩa để chỉ sự phân đoạn nội dung, phân đoạn ý của văn bản. Một văn bản bao gồm nhiều đoạn văn: Đoạn mở đầu văn bản, những đoạn khai triển văn bản, đoạn kết thúc văn bản. Mỗi đoạn phải có sự hoàn chỉnh nhất định nào đó về mặt ý, về mặt nội dung. Nhưng thế nào là một nội dung, một ý hoàn chỉnh thì không có tiêu chí để xác định rõ ràng. Một văn bản, tuỳ theo người đọc cảm nhận mà phân chia ra thành các đoạn, sự phân chia có thể không thống nhất giữa những người đọc: có người chia theo ý lớn, có người chia theo ý nhỏ. Ý lớn là đoạn bài có hai hoặc ba ý nhỏ được khai triển từ ý lớn, bao gồm hai hoặc ba đoạn văn ngắn, mỗi đoạn ngắn đó là một ý nhỏ, các đoạn này hợp ý với nhau thành một ý lớn; ý nhỏ là ý được khai triển từ ý lớn, về mặt nội dung chỉ triển khai theo một phương diện, một hướng cụ thể, mỗi ý nhỏ là một đoạn.",
            currentWord: 0,
            timeLeft: 60,
            editable: false,
            isStartedTime: false,
            inputValue: '',
            words: [],
            oldPosition: 0,
            top: 0,
            currentWidth: 0
        }
        this.listenToEmitter();
        this.spanRef = [];
        this.divRef = React.createRef();
        this.wrongWords = [];
    }

    listenToEmitter = () => {
        emitter.on('EVENT_CANCEL_EDIT_PARAGRAPH', () => {
            this.setState({
                editable: false
            })
            this.reloadState();
        })
        emitter.on('EVENT_SAVE_PARAGRAPH', async (data) => {
            await this.setState({
                Paragraph: data.Paragraph
            })
            this.reloadState();
            emitter.emit("EVENT_CANCEL_EDIT_PARAGRAPH");
        })
    }

    reloadState = () => {
        if(this.timerID) {
            clearInterval(this.timerID);
        }
        let position = this.state.Paragraph.indexOf(' ', this.state.range);
        this.setState({
            currentWord: 0,
            timeLeft: 60,
            isStartedTime: false,
            inputValue: '',
            oldPosition: 0,
            top: 0
        })
        this.wrongWords = [];

    }

    componentDidMount = async () => {
        if(this.props.Paragraph) {
            this.setState({
                Paragraph: this.props.Paragraph + " ",
                editable: true
            })
        }
        
        await this.setState({
            words: this.state.Paragraph.split(" ")
        })
        let length = this.state.words.length;
        for (let i = 0; i < length; i++) {
            this.spanRef.push(React.createRef());
        }
        this.reloadState();
    }

    componentDidUpdate = () => {
        const div = this.divRef.current;
        if(div && div.offsetWidth !== this.state.currentWidth) {
            let line = -1;
            for(let i = 0; i < this.state.currentWord - 1; i++) {
                let span = this.spanRef[i].current;
                if(span && span.offsetLeft == 0) {
                    ++line;
                }
            }
            console.log(line);
            this.setState({
                currentWidth: div.offsetWidth,
                top: -40 * (line)
            })
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

    handleOnChange = async (event) => {
        
        if(event.target.value.search(' ') != -1) {
            if(event.target.value.search(' ') == 0) {
                event.target.value = '';
                return;
            }
            event.target.value = event.target.value.slice(0, -1);
            if(event.target.value !== this.state.words[this.state.currentWord]) {
                this.wrongWords.push(this.state.currentWord);
            }
            event.target.value = '';

            let oldCurrentWord = this.state.currentWord;
            let words = this.state.words;
            oldCurrentWord++;
            if(oldCurrentWord >= words.length) {
                oldCurrentWord %= words.length;
                this.reloadState();
            }
           this.setState({
                currentWord: oldCurrentWord,
                inputValue: ''
            })
            const span = this.spanRef[this.state.currentWord + 1].current;
            if(span) {
                if(span.offsetLeft == 0) {
                    this.setState({
                        top: this.state.top - 40
                    })
                }

            }
            return;

        }
        if(!this.state.isStartedTime) {
            this.setState({
                isStartedTime: true
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
        this.setState({
            inputValue: event.target.value
        })
    }
    

    render() {
        if(this.state.editable) {
            return <CustomParagraphs paragraph ={this.state.Paragraph}/>
        }
        return  (
            <Fragment>
                <div className='paragraph-container'>
                    {this.props.type == 'practice' && <i className="fas fa-edit" onClick ={() => {this.setState({editable: !this.state.editable})}}></i>}
                    {/* <p ><span className='finished'>{this.state.Paragraph.substring(this.state.start, this.state.iterator)}</span>{this.state.Paragraph.substring(this.state.iterator, this.state.end)}</p> */}
                    <div className="words" ref={this.divRef}>
                        <div className="word-row"  style={{ position: 'relative', top: `${this.state.top}px` }}>
                        {this.state.words.map((word, index) => {
                            if(index < this.state.currentWord) return <span className={this.wrongWords.includes(index) ? 'wrong' : 'finished-word'} ref={this.spanRef[index]}>{word}</span>
                            else if(index == this.state.currentWord) return <span className='current-word' ref = {this.spanRef[index]}>{word}</span>
                            return <span ref={this.spanRef[index]}>{word}</span>
                        })}
                        </div>
                        
                    </div>
                    
                </div>
                <div className='typing'>
                    <div className = "typing-container">
                        <input value ={this.state.inputValue} onChange={this.handleOnChange}/>
                        <button>{this.getTimer()}</button>
                        <button className ="reload" onClick ={this.reloadState}><i class="fas fa-sync-alt"></i></button>
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
