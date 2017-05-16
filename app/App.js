/**
 * Created by lihao on 2017/4/22.
 */
import {
    AppRegistry,
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import Banner from 'react-native-swiper';
import Main from './Main';
import WindowUtil from './utils/WindowUtil';
import localStorage from './utils/Storage';
import { Provider } from 'react-redux';
import Store from './redux/Store';
let loadingPicture = require('./images/pictures/pictrue_app_start.jpg');
let guidePic1 = require('./images/pictures/guide_1.png');
let guidePic2 = require('./images/pictures/guide_2.png');
let guidePic3 = require('./images/pictures/guide_3.png');
let guidePic4 = require('./images/pictures/guide_4.png');
let window = WindowUtil.window;

class GameTime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showWelcome: 1
        }
        
    }

    componentDidMount() {
        global.storage = localStorage;
        this.getLoginStatus = this.getLoginStatus.bind(this);
        this.getLoginStatus();
        setTimeout(() => {
            this.setState({
                showWelcome: 2
            })
        }, 2000);
    }

    getLoginStatus() {
        localStorage.load({
            key: 'CurUser',
        }).then((result) => {
            if (result && result.user_phone !== '') {
                this.props.onLoginOK(result)
            } else {

            }
            console.log('成功获取信息!');
        }).catch(err => {
            console.log('出错了!');
        });
    }

    render() {
        return (
            <Provider store={Store}>
                {
                    this.state.showWelcome == 0 ?
                        <Main /> :
                        this.state.showWelcome == 2 ?
                            <View
                                style={styles.guideView}
                            >
                                <Banner
                                    style={styles.guideView}
                                    dotColor="rgba(255, 255, 255, 0)"
                                    activeDotColor="rgba(255, 255, 255, 0)"
                                    loop={false}
                                >
                                    <Image
                                        source={guidePic1}
                                        style={{
                                            flex: 1,
                                            width: window.width,
                                            height: window.height
                                        }} />
                                    <Image
                                        source={guidePic2}
                                        style={{
                                            flex: 1,
                                            width: window.width,
                                            height: window.height
                                        }} />
                                    <Image
                                        source={guidePic3}
                                        style={{
                                            flex: 1,
                                            width: window.width,
                                            height: window.height
                                        }} />
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            this.setState({
                                                showWelcome: 0
                                            })
                                        }}
                                    >
                                        <Image
                                            source={guidePic4}
                                            style={{
                                                flex: 1,
                                                width: window.width,
                                                height: window.height
                                            }} />
                                    </TouchableWithoutFeedback>

                                </Banner>
                            </View> :
                            <Image
                                source={loadingPicture}
                                style={{
                                    flex: 1,
                                    width: window.width,
                                    height: window.height
                                }} />
                }
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    guideView: {
        flex: 1,
        width: window.width,
        height: window.height
    }
})

export default GameTime;