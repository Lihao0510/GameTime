/**
 * Created by lihao on 2017/4/22.
 */
/**
 * Created by lihao on 2017/4/22.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import Toolbar from './Toolbar'
import PersonDetail from '../pages/PersonDetail';
import ColorUtil from '../utils/ColorUtils';
import WindowUtil from '../utils/WindowUtil';

import {closeDrawer} from '../redux/actions/DrawerAction'

class DrawerView extends Component {

    constructor(props) {
        super(props);
    }

    renderDivider() {
        return (
            <View
                style={{
                    width: WindowUtil.width,
                    height: 15,
                    backgroundColor: ColorUtil.mostWhite
                }}
            />
        )
    }

    renderLongDevideLine() {
        return (
            <View
                style={{
                    width: WindowUtil.width,
                    height: 0.66,
                    backgroundColor: ColorUtil.whiteGray
                }}
            />
        )
    }

    renderShortDevideLine() {
        return (
            <View
                style={{
                    width: WindowUtil.width,
                    height: 0.66,
                    backgroundColor: ColorUtil.whiteGray,
                    marginLeft: 15
                }}
            />
        )
    }

    renderPersonMessage() {
        const curuser = this.props.curuser;
        return(
            <View
                style={styles.userMessage}
            >
                <View
                    style={{
                        marginLeft: 20,
                        width: 120,
                        height: 140,
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Image
                        source={require('../images/pictures/pic_news_sea.jpg')}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            marginTop: 20
                        }}
                    />
                    <Text
                        style={{
                            color: ColorUtil.white,
                            fontSize: 16
                        }}
                    >
                        {this.props.isLogin ? curuser.user_name? curuser.user_name: curuser.user_phone: '您尚未登录'}
                    </Text>
                    <Text
                        style={{
                            color: ColorUtil.white,
                            fontSize: 14,
                            marginBottom: 9
                        }}
                    >
                        {this.props.isLogin ? curuser.user_type? '等级' + curuser.user_name: '未知等级': '未知等级'}
                    </Text>
                </View>

            </View>
        )
    }


    render() {
        const {onDrawerOpen, onDrawerClose, navigator} = this.props;
        return (
            <View
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {this.renderPersonMessage()}
                {this.renderDivider()}
                {this.renderLongDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                    onPress={() => {
                        this.props.navigator.push({
                            component: PersonDetail,
                            name: 'PersonDetail',
                            args: {
                                name: '我的信息'
                            }
                        })
                        this.props.onDrawerClose()
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_mine.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        个人信息
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_talk.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        站内信
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_like.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        我的收藏
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_message.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        我的帖子
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_contribute.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        我的投稿
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_reply.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        提交反馈
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderLongDevideLine()}
                {this.renderDivider()}
                {this.renderLongDevideLine()}
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: WindowUtil.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                >
                    <Image
                        style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25
                        }}
                        source={require('../images/icons/sys_setting.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        系统设置
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={{
                            marginRight: 15,
                            height: 20,
                            width: 20
                        }}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorUtil.nearlyWhite
    },
    userMessage: {
        height: Platform.OS == "ios" ? 205 : 185,
        width: WindowUtil.width,
        backgroundColor: ColorUtil.themeColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/*
 * mapStateToProps中的参数,会反映在当前组件的this.props中
 * 使用时用 const {open} = this.props; 调用
 * */
const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.loginReducer.isLogin,
        curuser: state.loginReducer.user
    }
};

/*
 * mapDispatchToProps中的方法,会体现在当前组件的this.props中
 * 使用时用 const { onDrawerOpen, onDrawerClose } = this.props; 调用
 * */
const mapDispatchToProps = (dispatch, ownProps) => {

    return {

        onDrawerClose: () => {
            dispatch(closeDrawer());
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);



