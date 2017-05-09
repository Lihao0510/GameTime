/**
 * Created by lihao on 2017/5/6.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Toast} from 'antd-mobile';
import Toolbar from '../container/Toolbar'
import ColorUtil from '../utils/ColorUtils';
import SmartInput from '../components/SmartInputText';
import SmartButton from '../components/SmartButton';
import {baseUrl} from '../utils/UrlList';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userPhone: '',
            userPwd: '',
            userPwdRepeat: ''
        };
        this.doRegister = this.doRegister.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    doRegister() {
        let userphone = this.state.userPhone;
        let userpwd = this.state.userPwd;
        let userpwdcheck = this.state.userPwdRepeat;

        if (!userphone.match("^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,1-9])|(18[0,1-9]))\\d{8}$")) {
            Toast.fail('账号格式错误', 1);
            return;
        }
        if (userpwd !== userpwdcheck) {
            Toast.fail('密码不一致', 1);
            return;
        }

        Toast.loading('登录中...', 3, () => {
            Toast.fail('无网络访问', 1);
        });

        fetch(baseUrl + 'login/rigister', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
            body: JSON.stringify({
                userphone: userphone,
                userpwd: userpwd,
                useremail: ''
            })
        }).then((result) => {
            Toast.hide();
            return result.json();
        }).then((data) => {
            if (data.status === 1) {
                Toast.success('注册成功', 1);
                setTimeout(() => {
                    this.props.navigator.pop();
                }, 1000);
            } else if (data.status === 4) {
                Toast.fail('注册失败', 1);
            }
        }).catch((e) => {
            console.log('错误:' + e.toString())
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="注册账号" onLeftPress={this.props.navigator.pop} {...this.props} />
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
                    }}
                    secureTextEntry={true}
                />
                <SmartInput
                    onChange={
                        (text) => {
                            this.setState({
                                userPwdRepeat: text
                            });
                        }
                    }
                    leftIcon="password"
                    placeHolder="请确认您的密码"
                    style={{
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    secureTextEntry={true}
                />
                <SmartButton
                    onClick={this.doRegister}
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

export default Register;