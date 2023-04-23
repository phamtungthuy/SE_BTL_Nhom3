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
            start: 0,
            end: 0,
            iterator: 0,
            range: 100,
            timeLeft: 60,
            editable: false,
            isStartedTime: false,
            inputValue: ''
        }
        this.listenToEmitter();
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
            start: 0,
            timeLeft: 60,
            iterator: 0,
            end: (position != -1 ? position : this.state.Paragraph.length),
            isStartedTime: false,
            inputValue: ''
        })

    }

    componentDidMount = () => {
        if(this.props.Paragraph) {
            console.log('received');
            this.setState({
                Paragraph: this.props.Paragraph + " ",
                editable: true
            })
        } 
        

        this.reloadState();
    }

    componentDidUpdate = () => {
        if(this.state.iterator >= this.state.end && this.state.end < this.state.Paragraph.length) {
            console.log('hello');
            let oldStart = this.state.start;
            let oldEnd = this.state.end;
            let newPosition = this.state.Paragraph.indexOf(' ', oldEnd + this.state.range);
            console.log(newPosition, oldEnd, this.state.Paragraph.length);
            if(newPosition != -1) {

                this.setState({
                    start: oldEnd, 
                    end: newPosition
                })
            } else {    
                this.reloadState();
            }
        } else if(this.state.iterator >= this.state.end && this.state.end >= this.state.Paragraph.length) {
            console.log('hi');

            this.reloadState();
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
        console.log(event.target.value)
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
        if(!this.state.isStartedTime) {
            console.log('timer setting')
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
                    {this.props.type == 'practice' && <i class="fas fa-edit" onClick ={() => {this.setState({editable: !this.state.editable})}}></i>}
                    <p ><span className='finished'>{this.state.Paragraph.substring(this.state.start, this.state.iterator)}</span>{this.state.Paragraph.substring(this.state.iterator, this.state.end)}</p>
                    <p></p>
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
