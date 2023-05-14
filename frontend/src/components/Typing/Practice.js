import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from '../../utils'
import Typing from './Typing'
import CustomParagraphs from '../../services/CustomParagraphs';
import * as actions from '../../store/actions/index';
class Practice extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.enableEditParagraph();
    }

    componentWillUnmount = () => {
        this.props.disableEditParagraph();
    }

    render() {
        return (
                <Typing 
                type='practice'
                // firstTime ={true}
                />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        editable: state.typing.editable
    };
};

const mapDispatchToProps = dispatch => {
    return {
        enableEditParagraph: () => dispatch(actions.enableEditParagraph()),
        disableEditParagraph: () => dispatch(actions.disableEditParagraph())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
