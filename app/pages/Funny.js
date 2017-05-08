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
    TextInput
} from 'react-native';
import Toolbar from '../container/Toolbar';
import {Popup, Button} from 'antd-mobile';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';


class Funny extends Component {

    constructor(props){
        super(props);
        this.checkIn = this.checkIn.bind(this);
        this.closeCheckIn = this.closeCheckIn.bind(this);
    }

    checkIn() {
        Popup.show(
            <View
                style={{
                    width: WindowUtil.width,
                    height: 300,
                    backgroundColor: ColorUtil.white,
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}
            >
                <Button
                    type="primary"
                    style={{
                        alignSelf: 'flex-end',
                        height: 30,
                        width: 50,
                        marginRight: 10,
                        marginTop: 6
                    }}
                    size="small"
                    onClick={this.closeCheckIn}
                >
                    取消
                </Button>
                <TextInput
                    multiline={true}
                    maxLength={120}
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: ColorUtil.themeColor,
                        borderRadius: 6,
                        padding: 9,
                        margin: 12,
                        marginBottom: 60,
                        fontSize: 16,
                        lineHeight: 20
                    }}
                />
                <Text
                    style={{
                        position: 'absolute',
                        top: 12,
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >
                    发布说说
                </Text>
                <Button
                    type="primary"
                    onClick={this.closeCheckIn}
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
                    确认发布
                </Button>
            </View>
            , {animationType: 'slide-up', maskClosable: true});
    }

    closeCheckIn() {
        Popup.hide();
    }

    render() {
        const {onDrawerOpen, onDrawerClose, navigator} = this.props;
        return (
            <View style={styles.container}>
                <Toolbar
                    rightIcon="CHECKIN"
                    onLeftPress={onDrawerOpen}
                    onRightPress={this.checkIn}
                    iconType={1}
                    titleText="水友论坛"
                    {...this.props}
                />
                <Text style={styles.welcome}>
                    Welcome to Funny!
                </Text>
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

export default Funny;

