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
    View,
    FlatList
} from 'react-native';
import {Button} from 'antd-mobile';
import Toolbar from '../container/Toolbar';


class NewsList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="屌丝新闻" onLeftPress={this.props.navigator.pop} {...this.props} />
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
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

export default NewsList;

