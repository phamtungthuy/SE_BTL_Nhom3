import actionTypes from '../actions/actionTypes';

const initialState = {
    currentParagraph: 'adsasda ads asd ads ad',
    paragraphs: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_PARAGRAPH:
        let newParagraph  = state.paragraphs[Math.floor(Math.random() * state.paragraphs.length)];  
        return{
                ...state,
                currentParagraph: newParagraph
            }
        case actionTypes.UPDATE_CURRENT_PARAGRAPH:
            console.log(action.paragraph);
            return {
                ...state,
                currentParagraph: action.paragraph
            }
        case actionTypes.SET_PARAGRAPHS:
            return {
                ...state,
               paragraphs: action.paragraphs
            }
        default:
            return state;
    }
}

export default appReducer;