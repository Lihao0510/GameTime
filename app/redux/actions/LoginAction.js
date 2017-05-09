/**
 * Created by lihao on 2017/5/6.
 */
"use strict";
export const LOGIN_OK = 'LOAD_MORE';
export const LOGOUT_OK = 'INIT_LIST';

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