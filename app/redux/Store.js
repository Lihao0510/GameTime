/**
 * Created by lihao on 2017/4/26.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import drawerReducer from './reducer/DrawerReducer';
import homelistReducer from './reducer/HomeListReducer';
import reducers from './reducer'

const middleWares = [thunk];

export default createStore(reducers, {}, applyMiddleware(...middleWares));