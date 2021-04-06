import { SHOW_POPUP, CLOSE_POPUP } from './constants'

export const showPopup = (text) => {
    console.log(text);
    return {
        type: SHOW_POPUP,
        payload: text
    }
}

export const closePopup = () => {
    return {
        type: CLOSE_POPUP
    }
}