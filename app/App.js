/**
 * Created by lihao on 2017/4/22.
 */
import {
    AppRegistry,
    Image
} from 'react-native';
import React from 'react';
import Main from './Main';
import WindowUtil from './utils/WindowUtil';
import {Provider} from 'react-redux';
import Store from './redux/Store';
let loadingPicture = require('./images/pictures/pic_cover.png');
let window = WindowUtil.window;

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

    constructor(props) {
        super(props);
        this.state = {
            showWelcome: 1
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showWelcome: 0
            })
        }, 2000);
    }

    render() {
        return (
            <Provider store={Store}>
                {
                    this.state.showWelcome == 0 ?
                        <Main /> :
                        <Image
                            source={loadingPicture}
                            style={{
                                flex: 1,
                                width: window.width,
                                height: window.height
                            }}/>
                }
            </Provider>
        )
    }
}

AppRegistry.registerComponent('GameTime', () => GameTime);