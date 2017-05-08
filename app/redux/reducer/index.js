/**
 * Created by lihao on 2017/4/29.
 */
import drawerReducer from './DrawerReducer';
import homeListReducer from './HomeListReducer';
import loginReducer from './LoginReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    drawerReducer,
    homeListReducer,
    loginReducer
});