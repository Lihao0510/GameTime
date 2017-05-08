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
import {connect} from 'react-redux'
import Toolbar from '../container/Toolbar'
import PersonDetail from './PersonDetail';
import ColorUtil from '../utils/ColorUtils';
import WindowUtil from '../utils/WindowUtil';
import {LoginMessage} from '../utils/Globals';
import LoginPage from './Login';

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

    renderPersonMessage() {
        return (
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
                            borderRadius: 30
                        }}
                    />
                    <Text
                        style={{
                            color: ColorUtil.white,
                            fontSize: 16
                        }}
                    >
                        您尚未登录
                    </Text>
                    <Text
                        style={{
                            color: ColorUtil.white,
                            fontSize: 14,
                            marginBottom: 9
                        }}
                    >
                        等级: 菜鸟
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        height: 27,
                        width: 66,
                        top: 9,
                        right: 20
                    }}
                    onPress={this.props.isLogin ? ()=> {
                    } : () => {
                        this.props.navigator.push({
                            component: LoginPage,
                            name: 'Login',
                            args: {
                                name: '登录界面'
                            }
                        })
                    }}
                >
                    <Text
                        style={{
                            color: ColorUtil.white,
                            fontSize: 14,
                            textDecorationLine: 'underline',
                            paddingBottom: 3
                        }}
                    >
                        {this.props.isLogin ? '' : '登录/注册'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        const {onDrawerOpen, onDrawerClose, navigator} = this.props;
        return (
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <Toolbar
                    onLeftPress={onDrawerOpen}
                    iconType={1}
                    titleText="个人中心"
                    rightIcon="HELP"
                    {...this.props}
                />
                {this.renderPersonMessage()}
                {this.renderDivider()}
                {this.renderLongDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                    onPress={() => {
                        this.props.navigator.push({
                            component: PersonDetail,
                            name: 'PersonDetail',
                            args: {
                                name: '我的信息'
                            }
                        })
                    }}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        个人信息
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                    onPress={() => {
                        storage.save({
                            key: 'LoginMessage',  // 注意:请不要在key中使用_下划线符号!
                            data: {
                                from: 'Android&iOS',
                                userid: '10009',
                                token: 'asfuhaiue234234hii3h',
                                username: 'Wangnima'
                            }
                        });
                    }}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        站内信
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                    onPress={() => {
                        storage.load({
                            key: 'LoginMessage',
                        }).then((result) => {
                            LoginMessage.token = result.token;
                            LoginMessage.userid = result.userid;
                            LoginMessage.username = result.username;
                            console.log(result);
                        }).catch(err => {
                            //如果没有找到数据且没有sync方法，
                            //或者有其他异常，则在catch中返回
                            console.warn(err.message);
                        })
                    }}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        我的收藏
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                    onPress={() => {
                        console.log(LoginMessage);
                    }}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        我的帖子
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        我的投稿
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderShortDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        提交反馈
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderLongDevideLine()}
                {this.renderDivider()}
                {this.renderLongDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        系统设置
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
                        source={require('../images/icons/icon_right.png')}
                    />
                </TouchableOpacity>
                {this.renderLongDevideLine()}
                {this.renderDivider()}
                {this.renderLongDevideLine()}
                <TouchableOpacity
                    style={styles.itemBody}
                >
                    <Image
                        style={styles.leftIcon}
                        source={require('../images/icons/sys_jifen.png')}
                    />
                    <Text
                        style={styles.itemText}
                    >
                        关于应用
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Image
                        style={styles.rightArror}
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
        height: 140,
        width: WindowUtil.width,
        backgroundColor: ColorUtil.themeColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightArror: {
        marginRight: 15,
        height: 20,
        width: 20
    },
    leftIcon: {
        marginLeft: 15,
        height: 25,
        width: 25
    },
    itemText: {
        marginLeft: 15,
        fontSize: 16,
        color: ColorUtil.dark
    },
    itemBody: {
        height: 45,
        width: WindowUtil.width,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ColorUtil.white
    }
});

const mapStateToProps = (state, ownProps) => {

    return {
        isLogin: state.loginReducer.isLogin
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {

    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(System);



