import React from 'react';
import { connect } from 'react-redux';

class CustomParagraphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const minutes = Math.floor(this.state.timeLeft / 60);
    const seconds = this.state.timeLeft % 60;

    return (
      <div>
        Thời gian còn lại: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </div>
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