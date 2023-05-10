import actionTypes from '../actions/actionTypes';

const initialState = {
    records: []
}

const appReducer = (state = initialState, action) => {
    let new_records = [];
    switch (action.type) {
        case actionTypes.UPDATE_RECORDS:
            for(let i = 0; i < action.records.length; i++) {
                new_records.push({
                  username: action.records[i].Typing.User.name,
                  highest_wpm: action.records[i].highest_wpm,
                  total_score: action.records[i].total_score,
                
                })
              }
            return {
                ...state,
               records: new_records
            }
        case actionTypes.SORT_BY_WPM:
            new_records= state.records;
            new_records.sort((obj1, obj2) => obj2.highest_wpm - obj1.highest_wpm);
            return {
                ...state,
                records: new_records
            }
        case actionTypes.SORT_BY_SCORE:
            new_records = state.records;
            new_records.sort((obj1, obj2) => obj2.total_score - obj1.total_score);
            return {
                ...state,
                records: new_records
            }
        default:
            return state;
    }
}

export default appReducer;