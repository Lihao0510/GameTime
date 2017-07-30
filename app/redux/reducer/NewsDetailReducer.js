/**
 * Created by lihao on 2017/7/29.
 */
"use strict";
import {GET_DETAIL_START, GET_DETAIL_SUCCESS, GET_DETAIL_FAIL, getLocalNewsStart} from '../actions/NewsDetailAction';

const newsDetailReducer = (action = getLocalNewsStart(), state) => {

    switch (action.type){
        case GET_DETAIL_START:
            return {
                ...state,
                status: GET_DETAIL_START
            };
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                status: GET_DETAIL_SUCCESS,
                news: action.news
            };
        case GET_DETAIL_FAIL:
            return {
                ...state,
                status: GET_DETAIL_FAIL,
                error: action.error
            };
        default:
            return {
                ...state,
            }
    }
};

export default newsDetailReducer;