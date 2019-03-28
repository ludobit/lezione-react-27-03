import {ENDPOINT_API, LOCAL_USER} from '../constants/app.constants';
import User from '../classes/user';
import {apiAuthHeader} from '../helpers/auth-api-header.helper';

export const login = async (username, password) => {
    const res = await fetch(`${ENDPOINT_API}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
    const resBody = await res.json();
    if (res.status !== 200) {
        throw (resBody);
    } else {
        return new User(resBody);
    }
};

export const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem(LOCAL_USER);
};

export const getAllUsers = async () => {
    const res = await fetch(`${ENDPOINT_API}/api/amici`, {
        method: "GET",
        headers: apiAuthHeader()
    });
    if (res.status !== 200) {
        throw (res);
    } else {
        return await res.json();
    }
};
