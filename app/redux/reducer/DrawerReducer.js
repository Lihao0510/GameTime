/**
 * Created by lihao on 2017/4/26.
 */
import {OPEN_DRAWER, CLOSE_DRAWER, openDrawer, closeDrawer} from '../actions/DrawerAction';

const drawerReducer = (state = closeDrawer(), action) => {

    console.log('DrawerReducer开始运行!');

    switch (action.type) {
        case OPEN_DRAWER:
            return {
                ...state,
                open: action.open
            };
            break;
        case CLOSE_DRAWER:
            return {
                ...state,
                open: action.open
            };
            break;
        default:
            return {
                ...state
            };
            break;
    }
}

export default drawerReducer;