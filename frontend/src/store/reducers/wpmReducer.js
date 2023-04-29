import actionTypes from '../actions/actionTypes';

const initialState = {
    wrongWords: 0,
    correctWords: 0,
    totalWords: 0
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREASE_CORRECT_WORDS:
            return {
                ...state,
                correctWords: state.correctWords + 1,
                totalWords: state.totalWords + 1
            }
        case actionTypes.INCREASE_WRONG_WORDS:
            return {
                ...state,
                wrongWords: state.wrongWords + 1,
                totalWords: state.totalWords + 1
            }
        case actionTypes.RELOAD_WPM:
            return {
                wrongWords: 0,
                correctWords: 0,
                totalWords: 0
            }
        default:
            return state;
    }
}

export default appReducer;