/**
 * APP入口文件,非开发环境禁用LOG等函数
 * Created by lihao on 2017/5/17.
 */

import {
    AppRegistry,
} from 'react-native';
import React from 'react';
import Welcome from './Welcome.js';
import localStorage from './utils/Storage';

//指定全局储存为AsyncStorage
global.storage = localStorage;

if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        warn: () => {
        },
        error: () => {
        },
    };
}

class GameTime extends React.Component {

    render() {
        return (
            <Welcome />
        )
    }
}

AppRegistry.registerComponent('GameTime', () => GameTime);