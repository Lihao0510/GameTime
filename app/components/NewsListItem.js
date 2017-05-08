/**
 * Created by lihao on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Image,
    View,
    ListView,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';

const screenHeight = WindowUtil.window.height;
const screenWidth = WindowUtil.window.width;

class NewsListItem extends Component {

    constructor(props) {
        super(props);
        this.newsItem = this.props.newsItem
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <View
                    style={styles.leftView}
                >
                    <Text
                        style={styles.titleText}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {this.newsItem.title}
                    </Text>
                    <Text
                        style={styles.contentText}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {this.newsItem.content}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: screenWidth * 0.57,
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={styles.extraText}
                        >
                            点击 {this.newsItem.reader}
                        </Text>
                        <Text
                            style={styles.extraText}
                        >
                            来自 {this.newsItem.from}
                        </Text>

                    </View>
                </View>
                <Image
                    style={styles.rightImage}
                    source={require('../images/pictures/pic_news_naicha.jpg')}
                />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 105,
        backgroundColor: ColorUtil.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftView: {
        height: 85,
        width: screenWidth * 0.57,
        marginLeft: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: ColorUtil.white,
        justifyContent: 'space-between'
    },
    rightImage: {
        height: 85,
        width: screenWidth * 0.32,
        marginRight: 15
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentText: {
        fontSize: 14,
    },
    extraText: {
        marginRight: 15,
        fontSize: 12,
        color: ColorUtil.littleGray
    }


});

export default NewsListItem;