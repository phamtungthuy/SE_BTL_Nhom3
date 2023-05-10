import actionTypes from '../actions/actionTypes';
import HomePage from '../../routes/HomePage';

const initialState = {
    currentComponent: <HomePage/>,
    currentActive: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_COMPONENT:
            return {
                ...state,
                currentComponent: action.component,
                currentActive: action.name
            }
        case actionTypes.RETURN_HOME_PAGE:
            return {
                ...state,
                currentComponent: <HomePage/>,
                currentActive: 'HomePage'
            }
        default:
            return state;
    }
}

export default appReducer;