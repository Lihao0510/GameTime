/**
 * Created by lihao on 2017/5/6.
 */
"use strict";
export const LOGIN_OK = 'LOAD_MORE';
export const LOGOUT_OK = 'INIT_LIST';

export const login = () => {
    return({
        type: LOGIN_OK,
        isLogin: true
    })
};

export const logout = () => {
    return({
        type: LOGOUT_OK,
        isLogin: false
    })
};