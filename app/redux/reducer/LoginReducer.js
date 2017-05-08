/**
 * Created by lihao on 2017/5/6.
 */
"use strict";
import {LOGOUT_OK, LOGIN_OK, login, logout} from '../actions/LoginAction';

const loginReducer = (state = logout(), action) => {

    switch (action.type) {
        case LOGIN_OK:
            return {
                ...state,
                isLogin: action.isLogin
            };
            break;
        case LOGOUT_OK:
            return {
                ...state,
                isLogin: action.isLogin
            };
            break;
        default:
            return {
                ...state
            };
            break;
    }
};

export default loginReducer;