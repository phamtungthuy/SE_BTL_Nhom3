import actionTypes from './actionTypes';

export const reloadTypingState = (paragraph) => ({
    type: actionTypes.RELOAD_TYPING_STATE,
    paragraph: paragraph
})

export const adaptScreenWidth = (currentWidth, top) => ({
    type: actionTypes.ADAPT_SCREEN_WIDTH,
    currentWidth: currentWidth,
    top: top
})

export const nextWord = () => ({
    type: actionTypes.NEXT_WORD,
})

export const setPosition = () => ({
    type: actionTypes.SET_POSITION
})

export const startTyping = () => ({
    type: actionTypes.START_TYPING
})

export const setInputValue = () => ({
    type: actionTypes.SET_INPUT_VALUE
})

export const decreaseTimeLeft = () => ({
    type: actionTypes.DECREASE_TIME_LEFT
})

export const enableEditParagraph = () => ({
    type: actionTypes.ENABLE_EDIT_PARAGRAPH
})

export const disableEditParagraph = () => ({
    type: actionTypes.DISABLE_EDIT_PARAGRAPH
})