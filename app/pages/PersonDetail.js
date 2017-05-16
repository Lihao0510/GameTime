/**
 * Created by lihao on 2017/5/4.
 */
/**
 * Created by lihao on 2017/4/23.
 */
/**
 * Created by lihao on 2017/4/22.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Popup, Button, Toast, Modal} from 'antd-mobile';
import {connect} from 'react-redux';
import {login, logout} from '../redux/actions/LoginAction';
import Toolbar from '../container/Toolbar'
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';

const operation = Modal.operation;

class PersonDetail extends Component {

    constructor(props) {
        super(props);
        this.logoutAction = this.logoutAction.bind(this);
    }

    logoutAction = () => {
        if (!this.props.isLogin) {
            Toast.fail('您尚未登录', 1);
            return;
        }
        this.props.onLogoutOK();
        Toast.success('注销完成', 1);
        storage.remove({
            key: 'CurUser'
        });
        setTimeout(() => {
            this.props.navigator.pop();
        }, 1000);
    };

    onClick = () => {
        Popup.show(
            <View
                style={{
                    width: WindowUtil.width,
                    height: 300,
                    backgroundColor: ColorUtil.nearlyWhite,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 18
                    }}
                >
                    Fuck
                </Text>
                <Button
                    type="primary"
                    onClick={this.onClose}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: WindowUtil.width,
                        height: 50,
                        borderRadius: 0
                    }}
                >
                    隐藏
                </Button>
            </View>
            , {animationType: 'slide-up', maskClosable: true});
    };

    onClose = () => {
        console.log('点击了关闭');
        Popup.hide();
    };

    showAlert() {
        this.alertInstance = operation([
            { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
            { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
        ]);
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="个人信息" onLeftPress={this.props.navigator.pop} {...this.props} />
                <Button onClick={this.onClick}>显示</Button>
                <Button
                    type="primary"
                    onClick={this.logoutAction}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: WindowUtil.width,
                        height: 50,
                        borderRadius: 0
                    }}
                >
                    退出登录
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const mapStateToProps = (state, ownProps) => {

    return {
        isLogin: state.loginReducer.isLogin
    }

};


const mapDispatchToProps = (dispatch, ownProps) => {

    return {

        onLoginOK: (user) => {
            dispatch(login(user));
        },

        onLogoutOK: () => {
            dispatch(logout());
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);

