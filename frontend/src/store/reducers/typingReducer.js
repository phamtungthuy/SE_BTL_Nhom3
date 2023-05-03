import actionTypes from '../actions/actionTypes';
export const defaultTime = 10;
const initialState = {
    currentWord: 0,
    timeLeft: defaultTime,
    editable: false,
    isStartedTime: false,
    inputValue: '',
    words: [],
    oldPosition: 0,
    top: 0,
    currentWidth: 0
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RELOAD_TYPING_STATE:
            console.log(action.paragraph);
            let newWords = action.paragraph.split(" ");
            return {
                ...state,
                currentWord: 0,
                timeLeft: defaultTime,
                isStartedTime: false,
                inputValue: '',
                words: newWords,
                oldPosition: 0,
                top: 0
            }
        case actionTypes.ADAPT_SCREEN_WIDTH:
            return {
                ...state,
                currentWidth: action.currentWidth,
                top: action.top
            }
        case actionTypes.NEXT_WORD:
            let newCurrentWord = state.currentWord + 1;
           if(newCurrentWord >= state.words.length) {
            return {
                ...state,
                currentWord: 0,
                inputValue: '',
                top: 0,
                oldPosition: 0
            }
           } else {
            return {
                ...state,
                currentWord: newCurrentWord,
                inputValue: ''
            }
           }
        case actionTypes.SET_POSITION:
            let new_top = state.top - 55;
            return {
                ...state,
                top: new_top
            }
        case actionTypes.START_TYPING:
            return {
                ...state,
                isStartedTime: true
            }
        case actionTypes.SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            }
        case actionTypes.DECREASE_TIME_LEFT:
            let newTimeLeft = state.timeLeft - 1;
            return {
                ...state,
                timeLeft: newTimeLeft
            }
        case actionTypes.ENABLE_EDIT_PARAGRAPH:
            return {
                ...state,
                editable: true
            }
        case actionTypes.DISABLE_EDIT_PARAGRAPH:
            return {
                ...state,
                editable: false
            }
        default:
            return state;
    }
}

export default appReducer;