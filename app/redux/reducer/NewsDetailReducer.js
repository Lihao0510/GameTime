/**
 * Created by lihao on 2017/7/29.
 */
"use strict";
import {GET_DETAIL_START, GET_DETAIL_SUCCESS, GET_DETAIL_FAIL, getLocalNewsStart} from '../actions/NewsDetailAction';

const newsDetailReducer = (state = getLocalNewsStart(), action) => {

    console.log('有新的Action到达:' + action.type);

    switch (action.type){
        case GET_DETAIL_START:
            return {
                ...state,
                status: action.type
            };
        case GET_DETAIL_SUCCESS:
            console.log('有新的成功请求:' + action.news);
            return {
                ...state,
                status: action.type,
                news: action.news
            };
        case GET_DETAIL_FAIL:
            return {
                ...state,
                status: action.type,
                error: action.error
            };
        default:
            return {
                ...state,
            }
    }
};

export default newsDetailReducer;