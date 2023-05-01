import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Result.scss'
import html2canvas from 'html2canvas';
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

    render() {
        return (
            <div id="auswertung-result" class="col-md-6" style={{ display: "block" }}><h3>Kết quả</h3>
                <table class="table table-striped" id="result-table">
                    <tbody>
                        <tr><td id="wpm" class="name" colspan="2" title="Words per Minute: 1 word equals 5 keystrokes"><strong>{Math.floor(this.props.correctWords * 60 / this.props.time)} WPM</strong><small>(words per minute)</small></td></tr>
                        {/* <tr id="keystrokes"><td class="name">Tổ hợp phím</td><td class="value"><small>(<span class="correct">387</span> | <span class="wrong">40</span>)</small>&nbsp;427</td></tr> */}
                        <tr id="accuracy"><td class="name">Độ chính xác</td><td class="value"> <strong>{Math.round((this.props.totalWords ? this.props.correctWords / this.props.totalWords * 100 : 0) * 100) / 100}%</strong></td></tr>
                        <tr id="correct"><td class="name">Những từ đúng</td><td class="value"> <strong>{this.props.correctWords}</strong></td></tr>
                        <tr id="wrong"><td class="name">Những từ sai</td><td class="value"> <strong>{this.props.wrongWords}</strong></td></tr>
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
        totalWords: state.wpm.totalWords
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // increaseCorrectWords: state.wpm.increaseCorrectWords,
        // increaseWrongWords: state.wpm.increaseWrongWords,
        // increaseTotalWords: state.wpm.increaseTotalWords,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
