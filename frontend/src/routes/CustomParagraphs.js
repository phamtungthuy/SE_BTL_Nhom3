import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {emitter} from '../utils/emitter';
class CustomParagraphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
                const editedParagraph = event.target.parentNode.previousSibling.firstChild.textContent;
                emitter.emit('EVENT_SAVE_PARAGRAPH', {
                  Paragraph: editedParagraph
                });
              }}>Save</button>
              <button onClick = {() => {
                emitter.emit('EVENT_CANCEL_EDIT_PARAGRAPH')
            }}>Cancel</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomParagraphs);