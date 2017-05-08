/**
 * Created by lihao on 2017/5/6.
 */
'use strict';
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Keyboard,
    Animated,
    Platform,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';

import phoneIcon from '../images/icons/icon_phone_dark.png';
import passwordIcon from '../images/icons/icon_password_dark.png';

class SmartInputText extends Component {
    static propTypes = {
        leftIcon: PropTypes.string,
        maxCharNum: PropTypes.number,
        onChange: PropTypes.func,
        placeHolder: PropTypes.string,
        style: View.propTypes.style,
        secureTextEntry: PropTypes.bool
    };

    static defaultProps = {
        leftIcon: null,
        maxCharNum: 20,
        secureTextEntry: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.leftIcon) {
            case 'phone':
                this.icon = phoneIcon;
                break;
            case 'password':
                this.icon = passwordIcon;
                break;
            default:
                this.icon = null;
                break;
        }

        return (
            <View
                style={[styles.container, this.props.style]}
            >
                {this.icon === null ? <View/> : <Image
                    source={this.icon}
                    style={styles.leftIcon}
                />}
                <TextInput
                    style={styles.editText}
                    maxLength={this.props.maxCharNum}
                    onChangeText={(text) => {
                        this.props.onChange(text)
                    }}
                    placeholder={this.props.placeHolder}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorUtil.white,
        height: 45,
        width: WindowUtil.window.width - 80,
        borderColor: ColorUtil.themeColor,
        borderWidth: 0.9,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftIcon: {
        height: 24,
        width: 21,
        marginLeft: 5
    },
    editText: {
        flex: 1,
        marginLeft: 5
    }
});

export default SmartInputText;