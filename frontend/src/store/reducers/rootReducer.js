import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import wpmReducer from "./wpmReducer";
import recordReducer from './recordReducer';
import typingReducer from './typingReducer';
import paragraphReducer from './paragraphReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import componentReducer from './componentReducer';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const adminPersistConfig = {
    ...persistCommonConfig,
    key: 'admin',
    whitelist: ['isLoggedIn', 'adminInfo']
};

export default (history) => combineReducers({
    router: connectRouter(history),
    admin: persistReducer(adminPersistConfig, adminReducer),
    user: userReducer,
    app: appReducer,
    wpm: wpmReducer,
    record: recordReducer,
    typing: typingReducer,
    paragraph: paragraphReducer,
    component: componentReducer
})