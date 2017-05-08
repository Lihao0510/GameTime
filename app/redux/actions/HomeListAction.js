/**
 * Created by lihao on 2017/4/28.
 */
export const LOAD_MORE = 'LOAD_MORE';
export const INIT_LIST = 'INIT_LIST';

export const loadMore = () => {
    return {
        type: LOAD_MORE
    }
};

export const initList = () => {

    return {
        type: INIT_LIST,
        page: 0
    }
};