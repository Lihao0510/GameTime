/**
 * 论坛小分类帖子列表
 * Created by lihao on 2017/5/19.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import {Button} from 'antd-mobile';
import Toolbar from '../container/Toolbar';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';

const testPic = require('../images/pictures/banner_4.jpg');
const testForumBody = [{
    key: 0,
    title: '测试用标题1',
    shotcut: '测试用内容预览1',
    picture: 'https://gd1.alicdn.com/imgextra/i1/279439595/TB2XFRznB4lpuFjy1zjXXcAKpXa_!!279439595.jpg',
    reader: 3,
    reply: 9
}, {
    key: 1,
    title: '测试用标题2',
    shotcut: '测试用内容预览2',
    picture: '',
    reader: 3,
    reply: 9
}, {
    key: 2,
    title: '测试用标题3',
    shotcut: '测试用内容预览3,MLGBD,React Native 与 webview 之间需要共享用户的状态信息，但是不通过onPost 和 onMessage传递，有什么方法让webview直接读取缓存的方式？',
    picture: '',
    reader: 3,
    reply: 9
}, {
    key: 3,
    title: '测试用标题4',
    shotcut: '测试用内容预览4',
    picture: 'https://gd1.alicdn.com/imgextra/i1/279439595/TB2XFRznB4lpuFjy1zjXXcAKpXa_!!279439595.jpg',
    reader: 3,
    reply: 9
}, {
    key: 4,
    title: '测试用标题5',
    shotcut: '测试用内容预览5',
    picture: '',
    reader: 3,
    reply: 9
}, {
    key: 5,
    title: '测试用标题6',
    shotcut: '测试用内容预览6',
    picture: 'https://gd1.alicdn.com/imgextra/i1/279439595/TB2XFRznB4lpuFjy1zjXXcAKpXa_!!279439595.jpg',
    reader: 3,
    reply: 9
}, {
    key: 6,
    title: '测试用标题5',
    shotcut: '测试用内容预览5',
    picture: '',
    reader: 3,
    reply: 9
}, {
    key: 7,
    title: '测试用标题6',
    shotcut: '测试用内容预览6',
    picture: 'https://gd1.alicdn.com/imgextra/i1/279439595/TB2XFRznB4lpuFjy1zjXXcAKpXa_!!279439595.jpg',
    reader: 3,
    reply: 9
}];

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    listKeyExtractor = (item, index) => item.key;

    renderForumHeader() {
        return (
            <View
                style={styles.listHeader}
            >
                <View
                    style={styles.headerTransform}
                />
                <View
                    style={styles.headerContent}
                >
                    <View
                        style={styles.topMessage}
                    >
                        <Text>第一条公告</Text>
                    </View>
                    <View
                        style={styles.topMessage}
                    >
                        <Text>第二条公告</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderDivider() {
        return (
            <View
                style={{
                    width: WindowUtil.width,
                    height: 4,
                    backgroundColor: ColorUtil.nearlyWhite
                }}
            />
        )
    }

    renderForumItem(forumBody) {
        console.log(forumBody);
        console.log(forumBody.index);
        return (
            <TouchableOpacity
                style={styles.forumItem}
            >
                {
                    forumBody.item.picture === '' ?
                        <View
                            style={{
                                width: 0,
                                height: 0
                            }}
                        /> :
                        <Image
                            style={styles.itemPicture}
                            source={testPic}
                        />
                }
                <View
                    style={{
                        flex: 1,
                        height: 70,
                        marginLeft: 15,
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 16,
                            color: ColorUtil.deepDark,
                            fontWeight: 'bold',
                        }}
                    >
                        {forumBody.item.title}
                    </Text>
                    <Text
                        numberOfLines={1}
                    >
                        {forumBody.item.shotcut}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: forumBody.item.picture === '' ? 120 : 0
                        }}
                    >
                        <Image
                            style={styles.smallIcon}
                            source={require('../images/icons/icon_reader_num.png')}
                        />
                        <Text
                            style={{
                                marginRight: 5
                            }}
                        >阅读数: {forumBody.item.reader}</Text>
                        <View
                            style={{
                                flex: 1
                            }}
                        />
                        <Image
                            style={styles.smallIcon}
                            source={require('../images/icons/icon_reply_num.png')}
                        />
                        <Text
                            style={{
                                marginRight: 6
                            }}
                        >回帖数: {forumBody.item.reply}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText={this.props.titleText} onLeftPress={this.props.navigator.pop} {...this.props} />
                <Image
                    source={require('../images/pictures/banner_4.jpg')}
                    style={{
                        position: 'absolute',
                        height: 180,
                        width: WindowUtil.window.width,
                        top: Platform.OS == "ios" ? 65 : 45
                    }}
                />
                <FlatList
                    style={styles.flatList}
                    data={testForumBody}
                    renderItem={
                        this.renderForumItem
                    }
                    keyExtractor={this.listKeyExtractor}
                    ListHeaderComponent={this.renderForumHeader}
                    ItemSeparatorComponent={this.renderDivider}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorUtil.whiteGray,
    },
    flatList: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    forumItem: {
        width: WindowUtil.width,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ColorUtil.white,
    },
    itemPicture: {
        width: 105,
        height: 70,
        marginLeft: 15,
    },
    smallIcon: {
        width: 18,
        height: 18,
        marginRight: 5
    },
    listHeader: {
        height: 180,
        backgroundColor: ColorUtil.transparent,
    },
    headerTransform: {
        height: 120,
        backgroundColor: ColorUtil.transparent,
    },
    headerContent: {
        height: 60,
        backgroundColor: ColorUtil.white,
    },
    topMessage: {
        height: 30,
        backgroundColor: ColorUtil.white,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default NewsList;

