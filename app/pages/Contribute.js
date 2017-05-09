/**
 * Created by lihao on 2017/5/9.
 */
/**
 * Created by lihao on 2017/5/9.
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
import {Button} from 'antd-mobile';
import Toolbar from '../container/Toolbar';


class Contribute extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="新闻投稿" onLeftPress={this.props.navigator.pop} {...this.props} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default Contribute;

