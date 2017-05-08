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

class SmartButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        style: View.propTypes.style,
        onClick: PropTypes.func
    };

    static defaultProps = {
        title: '确定'
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity
                style={[styles.container, this.props.style]}
                onPress={
                    this.props.onClick
                }
            >
                <Text
                    style={styles.text}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorUtil.themeColor,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: ColorUtil.white
    }
});

export default SmartButton;