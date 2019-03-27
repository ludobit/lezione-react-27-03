import {LOCAL_USER} from '../../constants/app.constants';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../../constants/user.constants';

let user = localStorage.getItem(LOCAL_USER);
if (user) user = JSON.parse(user);
const defaultState = user ? {loading: true, user} : {};

export const authentication = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                user: action.user
            };
        case LOGIN_SUCCESS:
            return {
                loading: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                loading: false
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
