/**
 * Created by lihao on 2017/4/29.
 */
import {LOAD_MORE, INIT_LIST, initList, loadMore} from '../actions/HomeListAction';

const homeListReducer = (state = initList(), action) => {


    switch (action.type) {
        case LOAD_MORE:
            return {
                ...state,
                page: ++state.page
            };
            break;
        case INIT_LIST:
            return {
                ...state,
                page: 0
            };
            break;
        default:
            return {
                ...state
            };
            break;
    }
};

export default homeListReducer;