/**
 * Created by lihao on 2017/4/28.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    Image,
} from 'react-native';
import {connect} from 'react-redux';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';
import {loadMore, initList} from '../redux/actions/HomeListAction'
import HomeListItem from '../components/HomeListItem';

const screenHeight = WindowUtil.window.height;
const screenWidth = WindowUtil.window.width;

const listItem = {
    title: '初中女生被下药轮奸',
    from: '王尼玛',
    header: 'https://img.alicdn.com/imgextra/i3/2658269830/TB2sm._n5lnpuFjSZFgXXbi7FXa_!!2658269830-0-beehive-scenes.jpg_100x100q90.jpg',
    picture: 'https://aecpm.alicdn.com/tfscom/TB1eTq2QVXXXXcqXXXXXXXXXXXX.jpg',
    content: '很多要在App中显示的图片并不能在编译的时候获得，又或者有时候需要动态载入来减少打包后的二进制文件的大小。这些时候，与静态资源不同的是，你需要手动指定图片的尺寸。同时我们强烈建议你使用https以满足iOS App Transport Security 的要求。',
    reader: 49,
    reply: 15,
    time: '2017/04/29'
};

const itemArr = [];

class HomeList extends Component {

    constructor(props) {
        super(props);
        for (let i = 0; i < 5; i++) {
            itemArr.push(listItem);
        }
    }

    render() {
        const {actionInitList, actionLoadMore, page} = this.props;
        console.log('当前页数:' + page);
        itemArr.splice(0, itemArr.length);
        for (let i = 0; i < page * 5 + 5; i++) {
            itemArr.push(listItem);
        }
        return (
            <View style={styles.container}>
                {
                    itemArr.map((item, position) => {
                        return (
                            <HomeListItem {...this.props} item={item} key={position} position={position + 1} />
                        )
                    })
                }
                <TouchableOpacity
                    style={{
                        width: screenWidth,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: ColorUtil.white
                    }}
                    onPress={actionLoadMore}
                >
                    <Text>
                        点击加载更多...
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        backgroundColor: ColorUtil.nearlyWhite,
        flexDirection: 'column'
    },

});

const mapStateToProps = (state, ownProps) => {

    return {
        page: state.homeListReducer.page,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionLoadMore: () => {
            dispatch(loadMore());
        },

        actionInitList: () => {
            dispatch(initList());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);