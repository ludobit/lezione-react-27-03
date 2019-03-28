import {
    GET_USERS_FAILURE,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from '../../constants/user.constants';
import {getAllUsers, login, logout} from '../../services/user.service';
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

export const LOGOUT_ACTION = () => {
    return async (dispatch) => {
        await logout();
        history.push('/');
        dispatch(success());

        function success() {
            return {type: LOGOUT};
        }
    };
};

export const GET_USERS_ACTION = () => {
    return async (dispatch) => {
        dispatch(request());
        try {
            const users = await getAllUsers();
            dispatch(success(users));
        } catch (e) {
            dispatch(failure(e));
            dispatch(errorAlert(e));
        }
    };

    function request() {
        return {type: GET_USERS_REQUEST};
    }

    function success(users) {
        return {type: GET_USERS_SUCCESS, users};
    }

    function failure(error) {
        return {type: GET_USERS_FAILURE, error};
    }
};
