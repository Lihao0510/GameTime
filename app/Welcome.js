/**
 * APP欢迎页面与未登录时的引导页面
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
import Navigate from './Navigate';
import WindowUtil from './utils/WindowUtil';
import { Provider } from 'react-redux';
import Store from './redux/Store';
let loadingPicture = require('./images/pictures/pictrue_app_start.jpg');
let guidePic1 = require('./images/pictures/guide_1.png');
let guidePic2 = require('./images/pictures/guide_2.png');
let guidePic3 = require('./images/pictures/guide_3.png');
let guidePic4 = require('./images/pictures/guide_4.png');
let window = WindowUtil.window;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showWelcome: 1,
            showGuide: 1
        };
        this.getLoginStatus = this.getLoginStatus.bind(this);
        this.jumpPage = this.jumpPage.bind(this);
    }

    componentDidMount() {
        this.getLoginStatus()
        setTimeout(this.jumpPage, 2000);
    }

    jumpPage() {
        console.log('当前状态:' + this.state.showWelcome);
        switch (this.state.showGuide) {
            case 0:
                this.setState({
                    showWelcome: 0
                })
                break;
            case 1:
                this.setState({
                    showWelcome: 2
                })
                break;
            default:
                this.setState({
                    showWelcome: 2
                })
                break
        }
    }

    getLoginStatus() {
        storage.load({
            key: 'CurUser',
        }).then((result) => {
            if (result && result.user_phone !== '') {
                console.log('成功获取登录信息!');
                this.setState({
                    showGuide: 0
                })
            } else {
                console.log('您尚未登录信息!');
            }
        }).catch(err => {
            console.log('出错了!');
            this.setState({
                showGuide: 1
            })
        });
    }

    render() {
        return (
            <Provider store={Store}>
                {
                    this.state.showWelcome == 0 ?
                        <Navigate /> :
                        this.state.showWelcome == 2 ?
                            <View
                                style={styles.guideView}
                            >
                                <Banner
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

export default App;