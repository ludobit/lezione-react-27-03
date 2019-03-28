import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../../constants/user.constants';
import {login, logout} from '../../services/user.service';
import {history} from '../../helpers/history.helper';
import {errorAlert} from './alert.actions';

export const LOGIN_ACTION = (username, password) => {
    return async (dispatch) => {
        dispatch(request({}));
        try {
            const user = await login(username, password);
            dispatch(success(user));
            history.push('/dashboard');
        } catch (e) {
            dispatch(failure(e));
            dispatch(errorAlert(e));
        }
    };

    function request() {
        return {type: LOGIN_REQUEST};
    }

    function success(user) {
        return {type: LOGIN_SUCCESS, user};
    }

    function failure(error) {
        return {type: LOGIN_FAILURE, error};
    }
};

export const LOGOUT_ACTION = async () => {
    await logout();
    return {type: LOGOUT};
};
