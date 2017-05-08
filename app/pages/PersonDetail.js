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
import {Popup, Button} from 'antd-mobile';
import Toolbar from '../container/Toolbar'
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';


class PersonDetail extends Component {

    constructor(props) {
        super(props);
    }

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

    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="个人信息" onLeftPress={this.props.navigator.pop} {...this.props} />
                <Button onClick={this.onClick}>显示</Button>
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

export default PersonDetail;

