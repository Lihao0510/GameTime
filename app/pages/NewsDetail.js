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
import Toolbar from '../container/Toolbar'


class NewsDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="HomeDetail" onLeftPress={this.props.navigator.pop} {...this.props} />
                <Text style={styles.welcome}>
                    Welcome Here!, {this.props.name}!
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

export default NewsDetail;

