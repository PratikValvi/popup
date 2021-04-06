
import { SHOW_POPUP, CLOSE_POPUP } from './constants'

const initialState = {
    enablePopup: false,
    popupHeader: 'Alt Text',
    message: ''
}

const popupReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case SHOW_POPUP:
            return {
                ...state,
                enablePopup: true,
                message: actions.payload
            }
            break;

        case CLOSE_POPUP:
            return {
                ...state,
                enablePopup: false
            }
            break;

        default:
            return state
            break;
    }
};

export default popupReducer;