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
import Toolbar from '../container/Toolbar';
import ColorUtil from '../utils/ColorUtils';
import SmartInput from '../components/SmartInputText';
import SmartButton from '../components/SmartButton';
import RigisterPage from './Register';
import {login, logout}from '../redux/actions/LoginAction';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userPhone: '',
            userPwd: '',
        }
    }

    componentDidMount() {
        console.log(this.props);
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
                    onClick={() => {
                        console.log(this.state)
                    }}
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

        onLoginOK: () => {
            dispatch(login());
        },

        onLogoutOK: () => {
            dispatch(logout());
        }
    }

};

export default Login;