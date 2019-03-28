import {authentication} from './auth.reducer';
import {alert} from './alert.reducer';
import {combineReducers} from 'redux';
import {users} from './users.reducer';
import {messages} from './message.reducer';

export default combineReducers({
    authentication: authentication,
    alert: alert,
    users: users,
    messages: messages
});
