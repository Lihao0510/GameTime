/**
 * Created by lihao on 2017/5/6.
 */
"use strict";
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Toast} from 'antd-mobile';
import {connect} from 'react-redux';
import Toolbar from '../container/Toolbar';
import ColorUtil from '../utils/ColorUtils';
import SmartInput from '../components/SmartInputText';
import SmartButton from '../components/SmartButton';
import RigisterPage from './Register';
import {login, logout} from '../redux/actions/LoginAction';
import {baseUrl} from '../utils/UrlList';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userPhone: '',
            userPwd: '',
        }
        this.doLogin = this.doLogin.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    doLogin() {
        Toast.loading('登录中...', 6, () => {
            Toast.fail('无网络访问', 1);
        });
        let userphone = this.state.userPhone;
        let userpwd = this.state.userPwd;

        fetch(baseUrl + 'login/login', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
            body: JSON.stringify({
                userphone: userphone,
                userpwd: userpwd
            })
        }).then((result) => {
            Toast.hide();
            console.log(result.status);
            return result.json();
        }).then((data) => {
            if (data.status === 1) {
                Toast.success('登陆成功', 1);
                storage.save({
                    key: 'CurUser',  // 注意:请不要在key中使用_下划线符号!
                    data: data.user
                });
                this.props.onLoginOK(data.user);
                setTimeout(() => {
                    this.props.navigator.pop();
                }, 1000);
            } else if (data.status === 0) {
                Toast.fail('用户不存在', 1);
            } else if (data.status === 4) {
                Toast.fail('密码错误', 1);
            }
        }).catch((e) => {
            console.log('错误:' + e.toString());
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="登录社区" onLeftPress={this.props.navigator.pop} {...this.props} />
                <Image
                    source={require('../images/logo/logo_ritian.png')}
                    style={styles.logo}
                />
                <SmartInput
                    onChange={
                        (text) => {
                            this.setState({
                                userPhone: text
                            });
                        }
                    }
                    leftIcon="phone"
                    placeHolder="请输入您的手机号"
                    style={{
                        marginTop: 30
                    }}
                />
                <SmartInput
                    onChange={
                        (text) => {
                            this.setState({
                                userPwd: text
                            });
                        }
                    }
                    leftIcon="password"
                    placeHolder="请输入您的密码"
                    style={{
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    secureTextEntry={true}
                />
                <SmartButton
                    onClick={this.doLogin}
                    title="登录"
                    style={{
                        width: 180,
                        marginTop: 20
                    }}
                />
                <SmartButton
                    onClick={() => {
                        this.props.navigator.push({
                            component: RigisterPage,
                            name: 'Rigister',
                            args: {
                                name: '注册界面'
                            }
                        })
                    }}
                    title="注册"
                    style={{
                        width: 180,
                        marginTop: 20
                    }}
                />
                <Text
                    style={{
                        fontSize: 14,
                        color: ColorUtil.themeColor,
                        position: 'absolute',
                        bottom: 10,
                        fontWeight: 'bold',
                    }}
                >
                    开发者:李昊 联系方式:17786123214
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        height: 80,
        width: 200,
        marginTop: 30
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);