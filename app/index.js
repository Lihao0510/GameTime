import {
    AppRegistry,
} from 'react-native';
import React from 'react';
import App from './App.js';
import localStorage from './utils/Storage';

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
            <App />
        )
    }
}

AppRegistry.registerComponent('GameTime', () => GameTime);