import {ALERT_SUCCESS, ALERT_ERROR} from '../../constants/alert.constants';

export const alert = (state = {}, action) => {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case ALERT_ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        default:
            return state;
    }
};
