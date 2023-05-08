import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            difficulty: '',
            language: '',
            is_test: false
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                content: '',
                difficulty: '',
                language: '',
                is_test: false
            })
        });
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
        this.setState({
            content: '',
            difficulty: '',
            language: '',
            is_test: false
        })
    }

    handleOnchangeInput = (event, id) => {
        this.setState({
            [id]: event.target.value
        })
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['content', 'difficulty', 'language'];
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewParagraph = () => {
        let isValid = this.checkValidInput();
        console.log(this.state)
        if(isValid) {
            this.props.createNewParagraph(this.state);
            this.toggle();
        }
    }

    render() {

        return (
            
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={this.toggle} 
                className = {'modal-paragraph-container'}
                size = "lg"
            >
            <ModalHeader toggle={this.toggle}
            >Create a new Paragraph
            </ModalHeader>
            <ModalBody>
                <div className = "modal-paragraph-body">
                    <div className = "input-container width-2-3">
                        <label>Difficulty</label>
                        <select value={this.state.difficulty} onChange={(event) => {this.handleOnchangeInput(event, 'difficulty')}}>
                            <option value="">--Select level--</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>                           
                    </div>
                    <div className = "input-container width-2-3">
                        <label>Language</label>  
                        <select value={this.state.language} onChange={(event) => {this.handleOnchangeInput(event, 'language')}}>
                            <option value="">--Select language--</option>
                            <option value="English">English</option>
                            <option value="Vietnamese">Vietnamese</option>
                        </select>                                
                    </div>
                    <div className = "input-container width-1-3">
                        <label>Is Test</label>
                        <select value={this.state.is_test} onChange={(event) => {this.handleOnchangeInput(event, 'is_test')}}>
                            <option value={false}>False</option>
                            <option value={true}>True</option>
                        </select>                          
                    </div>
                    <div className = "input-container max-width-input">
                        <label>Content</label>
                        <textarea 
                        type ="textarea" 
                        onChange ={(event) => {this.handleOnchangeInput(event, "content");}}
                        value={this.state.content}
                        />                            
                    </div>
                </div>

            </ModalBody>
            <ModalFooter>
            <Button 
            color="primary" 
            className = "px-3" 
            onClick={this.handleAddNewParagraph}>
                Add new
            </Button>{' '}
            <Button color="secondary" className = "px-3" onClick={this.toggle}>
                Close
            </Button>
            </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


