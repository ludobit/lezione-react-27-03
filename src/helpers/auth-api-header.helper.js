import {LOCAL_USER} from '../constants/app.constants';

export const apiAuthHeader = () => {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem(LOCAL_USER));
    if (user && user.token) {
        return {
            'Authorization': 'Bearer ' + user.token,
            'Content-Type': 'application/json'
        };
    } else {
        return {
            'Content-Type': 'application/json'
        };
    }
};
