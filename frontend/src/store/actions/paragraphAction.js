import actionTypes from './actionTypes';

export const updateCurrentParagraph = (paragraph) => ({
    type: actionTypes.UPDATE_CURRENT_PARAGRAPH,
    paragraph: paragraph
})

export const  getRandomParagraph = () => ({
    type: actionTypes.GET_RANDOM_PARAGRAPH
})

export const setParagraphs = (paragraphs) => ({
    type: actionTypes.SET_PARAGRAPHS,
    paragraphs: paragraphs
})