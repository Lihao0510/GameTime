/**
 * Created by lihao on 2017/4/29.
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
import NewsDetail from '../pages/NewsDetail';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';

const screenHeight = WindowUtil.window.height;
const screenWidth = WindowUtil.window.width;

class HomeListItem extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Image
                    source={{uri: this.item.header}}
                    style={{
                        height: 28,
                        width: 28,
                        borderRadius: 14,
                        marginLeft: 10
                    }}
                />
                <Text style={{
                    marginLeft: 10,
                    fontSize: 14
                }}>
                    {this.item.from}
                </Text>
                <View
                    style={{
                        flex: 1
                    }}
                />
                <Text style={{
                    marginRight: 10,
                    fontSize: 14,
                }}>
                    {this.item.time}
                </Text>
            </View>
        )
    }

    renderImage() {
        return (
            <Image style={styles.image}
                   source={{uri: this.item.picture}}
            />
        )
    }

    renderContent() {
        return (
            <View
                style={styles.content}
            >
                <Text
                    style={{
                        color: ColorUtil.deepGray,
                        fontSize: 14,
                        lineHeight: 22
                    }}
                    numberOfLines={3}
                >
                    {this.item.content}
                </Text>
            </View>
        )

    }

    renderTitle() {
        return (
            <View style={styles.title}>
                <Text
                    style={{
                        fontSize: 19,
                        color: ColorUtil.deepDark,
                        fontWeight: 'bold',
                        marginLeft: 10,
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {this.item.title}
                </Text>
            </View>
        )
    }

    renderFooter() {
        const {position} = this.props;
        return (
            <View style={styles.footer}>
                <Text style={{
                    marginLeft: 10
                }}>{'点击量 ' + this.item.reader}</Text>
                <Text style={{
                    marginLeft: 10
                }}>{'回复数 ' + this.item.reply}</Text>
                <Text style={{
                    marginLeft: 10
                }}>{'位置 ' + position}</Text>
            </View>
        )
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    this.props.navigator.push({
                        component: NewsDetail,
                        name: 'NewsDetail',
                        args: {
                            name: '新闻详情'
                        }
                    })
                }}
            >
                {this.renderHeader()}
                {this.renderTitle()}
                {this.renderImage()}
                {this.renderContent()}
                {this.renderFooter()}
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight * 0.5,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom: 6,
    },
    header: {
        width: screenWidth,
        height: screenHeight * 0.5 * 0.1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        width: screenWidth,
        height: screenHeight * 0.5 * 0.08,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: screenWidth,
        height: screenHeight * 0.5 * 0.47,
    },
    content: {
        width: screenWidth - 20,
        height: screenHeight * 0.5 * 0.25,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
    footer: {
        width: screenWidth,
        height: screenHeight * 0.5 * 0.1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
});

export default HomeListItem;