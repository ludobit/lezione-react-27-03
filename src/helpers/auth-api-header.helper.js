import {LOCAL_USER} from '../constants/app.constants';

export function apiAuthHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem(LOCAL_USER));
    if (user && user.token) {
        return {'Authorization': 'Bearer ' + user.token};
    } else {
        return {};
    }
}
