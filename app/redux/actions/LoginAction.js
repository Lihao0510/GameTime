/**
 * Created by lihao on 2017/5/6.
 */
"use strict";
export const LOGIN_OK = 'LOGIN_OK';
export const LOGOUT_OK = 'LOGOUT_OK';

export const login = (user) => {
    return({
        type: LOGIN_OK,
        isLogin: true,
        user: user
    })
};

export const logout = () => {
    return({
        type: LOGOUT_OK,
        isLogin: false,
        user: {}
    })
};