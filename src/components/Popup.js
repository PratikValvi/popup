
import { connect } from 'react-redux';
import React, { Component } from 'react'
import '../styles/Popup/PopUp.css';

class Popup extends Component {
  render() {
    return (
      <div>
        <div className="modal-popup">
          <div className="modal-popup-content">
            <h2 className="modal-popup-header">{this.props.popupHeader}</h2>
            <div className="modal-popup-message">{this.props.message}</div>
            <div className="buttons-wrapper">
              <span className="ok-button">OK</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    popupHeader: state.popupHeader,
    message: state.message
  }
}

export default connect(mapStatetoProps)(Popup);
