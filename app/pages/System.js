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
    ScrollView
} from 'react-native';
import Toolbar from '../container/Toolbar'
import ColorUtil from '../utils/ColorUtils';
import WindowUtil from '../utils/WindowUtil';

class System extends Component {

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

    render() {
        const {onDrawerOpen, onDrawerClose, navigator} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Toolbar
                    onLeftPress={onDrawerOpen}
                    iconType={1}
                    titleText="个人中心"
                    rightIcon="HELP"
                    {...this.props}
                />
                <View
                    style={styles.userMessage}
                >

                </View>
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
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        我的财富
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
                        source={require('../images/icons/sys_jifen.png')}
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
                        source={require('../images/icons/sys_jifen.png')}
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
                        source={require('../images/icons/sys_jifen.png')}
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
                        source={require('../images/icons/sys_jifen.png')}
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
                        source={require('../images/icons/sys_jifen.png')}
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
                        source={require('../images/icons/sys_jifen.png')}
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
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 16,
                            color: ColorUtil.dark
                        }}
                    >
                        退出登录
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
                {this.renderDivider()}
                {this.renderDivider()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorUtil.nearlyWhite,
    },
    userMessage: {
        height: 120,
        width: WindowUtil.width,
        backgroundColor: ColorUtil.themeColor
    },
});

export default System;

