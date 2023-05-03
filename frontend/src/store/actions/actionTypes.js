const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',

    //admin
    ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    INCREASE_CORRECT_WORDS: 'INCREASE_CORRECT_WORDS',
    INCREASE_WRONG_WORDS: 'DECREASE_WRONG_WRODS',
    RELOAD_WPM: 'RELOAD_WPM',
    UPDATE_RECORDS: 'UPDATE_RECORDS',
    RELOAD_TYPING_STATE: 'RELOAD_TYPING_STATE',
    UPDATE_CURRENT_PARAGRAPH: 'UPDATE_CURRENT_PARAGRAPH',
    GET_RANDOM_PARAGRAPH: 'GET_RANDOM_PARAGRAPH',
    ADAPT_SCREEN_WIDTH: 'ADAPT_SCREEN_WIDTH',
    SET_POSITION: 'SET_POSITION',
    NEXT_WORD: 'NEXT_WORD',
    START_TYPING: 'START_TYPING',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
    DECREASE_TIME_LEFT: 'DECREASE_TIME_LEFT',
    UPDATE_CURRENT_PARAGRAPH: 'UPDATE_CURRENT_PARAGRAPH',
    SET_PARAGRAPHS: 'SET_PARAGRAPHS',
    ENABLE_EDIT_PARAGRAPH: 'ENABLE_EDIT_PARAGRAPH',
    DISABLE_EDIT_PARAGRAPH: 'DISABLE_EDIT_PARAGRAPH',
})


export default actionTypes;