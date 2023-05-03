import actionTypes from '../actions/actionTypes';

const initialState = {
    records: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_RECORDS:
            let new_records = []
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
        default:
            return state;
    }
}

export default appReducer;