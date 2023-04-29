import actionTypes from './actionTypes';

export const userLoginSuccess = (adminInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    adminInfo: adminInfo
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})