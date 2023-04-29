import actionTypes from './actionTypes';

export const increaseCorrectWords = () => ({
    type: actionTypes.INCREASE_CORRECT_WORDS,
})

export const increaseWrongWords = () => ({
    type: actionTypes.INCREASE_WRONG_WORDS
})

export const reloadWPM = () => ({
    type: actionTypes.RELOAD_WPM
})