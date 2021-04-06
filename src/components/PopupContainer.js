import React, { Component } from 'react'
import Popup from './Popup';
import { connect } from 'react-redux';
import bulb from '../assets/Angelo-Gemmi-bulb.svg';
import { showPopup, closePopup } from '../store/actions';
import { getWirisAltText } from '../utils';

class PopupContainer extends Component {

    handleClick = (e) => {

        if (e && e.target.nodeName === 'IMG' && e.detail === 1) {
            let WirisAltText = getWirisAltText(e);
            this.props.dispatch(showPopup(WirisAltText))
        }

        // if (e && e.target.nodeName === 'SPAN' && e.target.classList.contains('ok-button') && e.detail === 1) {
        //     this.props.dispatch(closePopup())
        // }
    }

    render() {
        return (
            <div className="Container" onClick={this.handleClick}>
                <button className="button">Click Me!</button>
                <img
                    src={bulb}
                    height="200px"
                    width="200px"
                    alt="Bulb Image"
                ></img>
                {this.props.enablePopup && <Popup />}
                <span>State : {this.props.enablePopup ? <p>True</p> : <p>False</p>}</span>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        enablePopup: state.enablePopup
    }
}

export default connect(mapStatetoProps)(PopupContainer);
