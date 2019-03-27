import {ENDPOINT_API, LOCAL_USER} from '../constants/app.constants';
import User from '../classes/user';

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
