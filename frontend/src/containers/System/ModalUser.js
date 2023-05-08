import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            address: '',
            phoneNumber: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                name: '',
                address: '',
                phoneNumber: ''
            })
        });
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
        this.setState({
            email: '',
            password: '',
            name: '',
            address: '',
            phoneNumber: ''
        })
    }

    handleOnchangeInput = (event, id) => {
        this.setState({
            [id]: event.target.value
        })
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'name', 'address', 'phoneNumber'];
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidInput();
        if(isValid) {
            this.props.createNewUser(this.state);
            this.toggle();
        }
    }

    render() {

        return (
            
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={this.toggle} 
                className = {'modal-user-container'}
                size = "lg"
            >
            <ModalHeader toggle={this.toggle}
            >Create a new user
            </ModalHeader>
            <ModalBody>
                <div className = "modal-user-body">
                    <div className = "input-container">
                        <label>Email</label>
                        <input 
                        type ="text" 
                        onChange ={(event) => {this.handleOnchangeInput(event, "email");}}
                        value ={this.state.email}
                        />                            
                    </div>
                    <div className = "input-container">
                        <label>Password</label>
                        <input 
                        type ="password" 
                        onChange ={(event) => {this.handleOnchangeInput(event, "password");}}
                        value = {this.state.password}
                        />                            
                    </div>
                    <div className = "input-container">
                        <label>Name</label>
                        <input 
                        type ="text" 
                        onChange ={(event) => {this.handleOnchangeInput(event, "name");}}
                        value={this.state.name}
                        />                            
                    </div>
                    <div className = "input-container">
                        <label>Phone Number</label>
                        <input 
                        type ="text" 
                        onChange ={(event) => {this.handleOnchangeInput(event, "phoneNumber");}}
                        value={this.state.phoneNumber}
                        />                            
                    </div>
                    <div className = "input-container max-width-input">
                        <label>Address</label>
                        <input 
                        type ="text" 
                        onChange ={(event) => {this.handleOnchangeInput(event, "address");}}
                        value={this.state.address}
                        />                            
                    </div>
                </div>

            </ModalBody>
            <ModalFooter>
            <Button 
            color="primary" 
            className = "px-3" 
            onClick={this.handleAddNewUser}>
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


