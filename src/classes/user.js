import {LOCAL_USER} from '../constants/app.constants';

class User {
    _uuid;
    _username;
    _password;
    _token;

    constructor(user) {
        localStorage.setItem(LOCAL_USER, JSON.stringify(user));
        const {uuid, username, password, token} = user;
        this._uuid = uuid;
        this._username = username;
        this._password = password;
        this._token = token;
    }

    get uuid() {
        return this._uuid;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get token() {
        return this._token;
    }
}

export default User;
