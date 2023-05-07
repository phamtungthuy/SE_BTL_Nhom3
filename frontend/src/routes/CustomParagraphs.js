import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {emitter} from '../utils/emitter';
import * as actions from '../store/actions/index';


class CustomParagraphs extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <Fragment>
         <div className ="edit-container">
            <div className="edit-content">
              <p 
              className="edit-Paragraph" contentEditable="true"
              suppressContentEditableWarning = {true}
              >{this.props.paragraph}</p>
            </div>
            <div className ="edit-bar">
              <button onClick = {(event) => {
                this.props.disableFirstTime();
                const editedParagraph = event.target.parentNode.previousSibling.firstChild.textContent;
                this.props.updateCurrentParagraph(editedParagraph);
                this.props.disableEditParagraph();
                this.props.reloadState(false);
              }}>{this.props.isFirstTime ? 'Start': 'Save'}</button>
              <button onClick = {() => {
                if(this.props.isFirstTime) {
                  this.props.disableFirstTime();
                  this.props.returnHomePage();
                }
                this.props.disableEditParagraph();
                this.props.reloadState(false);
            }}>{this.props.isFirstTime ? 'Exit' : 'Cancel'}</button>
            </div>
         </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
        paragraph: state.paragraph.currentParagraph
    };
};

const mapDispatchToProps = dispatch => {
    return {
      disableEditParagraph: () => dispatch(actions.disableEditParagraph()),
        returnHomePage: () => dispatch(actions.returnHomePage()),
        updateCurrentParagraph: (paragraph) => dispatch(actions.updateCurrentParagraph(paragraph))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomParagraphs);