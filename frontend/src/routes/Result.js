import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Result.scss'
import html2canvas from 'html2canvas';
import {defaultTime} from '../store/reducers/typingReducer';
import { updateRecords } from '../services/otherService';
class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: null
        }
    }

    handleClickCamera = () => {
        html2canvas(document.querySelector("#auswertung-result")).then(canvas => {
            const imgUrl = canvas.toDataURL();
            console.log(imgUrl);
            this.setState({
                imgUrl: imgUrl
            })
        });
    }

    componentDidMount = async () => {
        let wpm = Math.floor(this.props.correctWords * 60 / defaultTime);
        let accuracy = Math.round((this.props.totalWords ? this.props.correctWords / this.props.totalWords * 100 : 0) * 100) / 100;
        let score = Math.round(wpm * accuracy / 100);
        await this.setState({
            wpm: wpm,
            score: score,
            accuracy: accuracy
        })
        if(this.props.type === 'test') {
                console.log(this.props.type);

                let object = {
                        userId: this.props.userInfo.id,
                        paragraphId: this.props.paragraphId,
                        wpm: this.state.wpm,
                        score: this.state.score,
                        accuracy: this.state.accuracy
                    }
                    console.log('object: ',object)
                        let message = await updateRecords(object);
                        console.log(message);
        }
    }

    render() {
        return (
            <div id="auswertung-result" class="col-md-6" style={{ display: "block" }}><h3>Kết quả</h3>
                <table class="table table-striped" id="result-table">
                    <tbody>
                        <tr><td id="wpm" class="name" colspan="2" title="Words per Minute: 1 word equals 5 keystrokes"><strong>{this.state.wpm} WPM</strong><small>(words per minute)</small></td></tr>
                        {/* <tr id="keystrokes"><td class="name">Tổ hợp phím</td><td class="value"><small>(<span class="correct">387</span> | <span class="wrong">40</span>)</small>&nbsp;427</td></tr> */}
                        <tr id="accuracy"><td class="name">Độ chính xác</td><td class="value"> <strong>{this.state.accuracy}%</strong></td></tr>
                        <tr id="correct"><td class="name">Những từ đúng</td><td class="value"> <strong>{this.props.correctWords}</strong></td></tr>
                        <tr id="wrong"><td class="name">Những từ sai</td><td class="value"> <strong>{this.props.wrongWords}</strong></td></tr>
                        <tr ><td class="name">Điểm</td><td class="value"> <strong>{this.state.score}</strong></td></tr>
                        <tr>
                            <td> <a target="_blank" onClick={this.handleClickCamera} href={this.state.imgUrl}><i class="fas fa-camera"></i></a></td>
                            <td><i class="fas fa-sync-alt" onClick={this.props.reloadState}></i></td>
                        </tr>
                    </tbody>
                </table>
                </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        wrongWords: state.wpm.wrongWords,
        correctWords: state.wpm.correctWords,
        totalWords: state.wpm.totalWords,
        userInfo: state.user.userInfo,
        paragraphId: state.paragraph.currentParagraphId
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
