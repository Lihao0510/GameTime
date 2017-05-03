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
    View
} from 'react-native';
import Toolbar from '../container/Toolbar'


class Funny extends Component {
    render() {
        const {onDrawerOpen, onDrawerClose, navigator} = this.props;
        return (
            <View style={styles.container}>
                <Toolbar
                    rightIcon="SUBMIT"
                    onLeftPress={onDrawerOpen}
                    iconType={1}
                    titleText="时空论坛"
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

