import React, { Fragment } from 'react';
import { connect } from 'react-redux';

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
              <p className="edit-Paragraph" contentEditable="true">{this.props.paragraph}</p>
            </div>
            <div className ="edit-bar">
              <button>Save</button>
              <button>Cancel</button>
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