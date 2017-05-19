/**
 * 论坛小分类帖子列表
 * Created by lihao on 2017/5/19.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import { Button } from 'antd-mobile';
import Toolbar from '../container/Toolbar';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';


class NewsList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText={this.props.titleText} onLeftPress={this.props.navigator.pop} {...this.props} />
                <FlatList
                    style={styles.flatList}
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text style={styles.forumItem}>{item.key}</Text>}
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
    flatList: {
        flex: 1,
        backgroundColor: ColorUtil.mostWhite,
    },
    forumItem: {
        width: WindowUtil.width - 10,
        height: 80,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default NewsList;

