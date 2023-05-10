import actionTypes from './actionTypes';

export const updateRecords = (records) => ({
    type: actionTypes.UPDATE_RECORDS,
    records: records
})

export const sortByWPM = () => ({
    type: actionTypes.SORT_BY_WPM
})

export const sortByScore = () => ({
    type: actionTypes.SORT_BY_SCORE
})