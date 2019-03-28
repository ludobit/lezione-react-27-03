import {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE} from '../../constants/user.constants';

export const users = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                loading: true
            };
        case GET_USERS_SUCCESS:
            return {
                loading: false,
                users: action.users
            };
        case GET_USERS_FAILURE:
            return {
                loading: false
            };
        default:
            return state;
    }
};
