import {ALERT_SUCCESS, ALERT_ERROR} from '../../constants/alert.constants';

export const successAlert = ({message}) => {
    return {type: ALERT_SUCCESS, message};
};

export const errorAlert = ({message}) => {
    return {type: ALERT_ERROR, message};
};
