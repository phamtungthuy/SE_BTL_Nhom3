import actionTypes from './actionTypes';

export const setCurrentComponent = (component, name) => ({
    type: actionTypes.SET_CURRENT_COMPONENT,
    component: component,
    name: name
})

export const returnHomePage = () => ({
    type: actionTypes.RETURN_HOME_PAGE
})