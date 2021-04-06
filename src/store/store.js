import { createStore } from 'redux';
import popupReducer from './popupReducer'
const store = createStore(popupReducer);
export default store;