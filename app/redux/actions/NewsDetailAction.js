/**
 * Created by lihao on 2017/7/29.
 */
"use strict";
import {baseUrl} from '../../utils/UrlList';

export const GET_DETAIL_START = 'NEWS/GET_DETAIL_START';
export const GET_DETAIL_SUCCESS = 'NEWS/GET_DETAIL_SUCCESS';
export const GET_DETAIL_FAIL = 'NEWS/GET_DETAIL_FAIL';

let getLocalNewsSeqID = 0;

export const getLocalNewsByID = (newsID) => {

    console.log('即将发起请求！');

    return (dispatch) => {

        //http://localhost:3000/news/localdetail/5960e44fe982fd2a8f89c506
        //测试用新闻地址
        const requestUrl = baseUrl + 'news/localdetail/' + newsID;

        const localSeq = ++getLocalNewsSeqID;

        const dispatchValidSeqID = (action) => {
            if (localSeq === getLocalNewsSeqID) {
                dispatch(action);
            }
        };

        dispatchValidSeqID(getLocalNewsStart());

        console.log('已经发起请求！');


        fetch(requestUrl, {method: 'GET'})
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Failed to get Response from server: ' + response.status)
                }
                return response.json();
            })
            .then((result) => {
                if (result.status === 1) {
                    dispatchValidSeqID(getLocalNewsSuccess(result.result));
                } else {
                    dispatchValidSeqID(getLocalNewsFail(new Error('Fail to get users!')));
                }
            })
            .catch((error) => {
                dispatchValidSeqID(getLocalNewsFail(error))
            })

    }

};

export const getLocalNewsSuccess = (result) => {
    return {
        type: GET_DETAIL_SUCCESS,
        news: result
    }
};

export const getLocalNewsStart = () => {
    return {
        type: GET_DETAIL_START
    }
};

export const getLocalNewsFail = (error) => {
    return {
        type: GET_DETAIL_START,
        error: error
    }
};