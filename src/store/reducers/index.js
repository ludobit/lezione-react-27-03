import {authentication} from './auth.reducer';
import {alert} from './alert.reducer';
import {combineReducers} from 'redux';
import {users} from './users.reducer';

export default combineReducers({
    authentication: authentication,
    alert: alert,
    users: users
});
