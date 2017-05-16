import {
    AppRegistry,
} from 'react-native';
import React from 'react';
import App from './App.js';

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

AppRegistry.registerComponent('GameTime', () => App);