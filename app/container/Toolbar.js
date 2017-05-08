/**
 * Created by lihao on 2017/4/26.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

import backIcon from '../images/icons/icon_back.png'
import menuIcon from '../images/icons/icon_menu.png'
import searchIcon from '../images/icons/icon_search.png'
import locationIcon from '../images/icons/icon_location.png'
import helpIcon from '../images/icons/icon_help.png'
import submitIcon from '../images/icons/icon_submit.png'
import checkinIcon from '../images/icons/icon_checkin.png'

import WindowUtil from '../utils/WindowUtil';

const iconArr = [searchIcon, locationIcon, helpIcon, submitIcon, checkinIcon];

class Toolbar extends Component {

    static propTypes = {
        iconType: PropTypes.number,
        titleText: PropTypes.string,
        rightIcon: PropTypes.string,
        canDismiss: PropTypes.bool,
        onLeftPress: PropTypes.func,
        onRightPress: PropTypes.func,
    };

    static defaultProps = {
        iconType: 0,
        titleText: 'ToolBar',
        rightIcon: null,
        canDismiss: false,
        onLeftPress: () => {
            console.log('onLeftPress');
        },
        onRightPress: () => {
            console.log('onRightPress');
        },
    };


    render() {
        const {iconType, titleText, onLeftPress, onRightPress, rightIcon} = this.props;
        let rightIconType = 0;
        switch (rightIcon) {
            case 'SEARCH':
                rightIconType = 1;
                break;
            case 'LOCATION':
                rightIconType = 2;
                break;
            case 'HELP':
                rightIconType = 3;
                break;
            case 'SUBMIT':
                rightIconType = 4;
                break;
            case 'CHECKIN':
                rightIconType = 5;
                break;
            default:
                break;
        }
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableOpacity
                        onPress={onLeftPress}
                        style={styles.leftTouchView}>
                        <Image style={styles.icon} source={iconType == 0 ? backIcon : menuIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {titleText}
                    </Text>
                    {
                        rightIcon == null ?
                            <View style={styles.rightTouchView}></View> :
                            <TouchableOpacity
                                style={styles.rightTouchView}
                                onPress={onRightPress}
                            >
                                <Image style={styles.rightIcon} source={iconArr[rightIconType - 1]}/>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: Platform.OS == "ios" ? 65 : 45,
        width: WindowUtil.window.width,
        backgroundColor: '#2196FC',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    toolbar: {
        height: 45,
        width: WindowUtil.window.width,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        color: 'white'
    },
    leftTouchView: {
        height: 40,
        width: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    rightTouchView: {
        height: 40,
        width: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 20,
        width: 20,
    },
    rightIcon: {
        height: 22,
        width: 22,
    }
});

export default Toolbar;