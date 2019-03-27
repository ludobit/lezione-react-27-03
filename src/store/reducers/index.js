import {authentication} from './auth.reducer';
import {alert} from './alert.reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    authentication: authentication,
    alert: alert
});
