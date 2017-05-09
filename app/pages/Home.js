/**
 * Created by lihao on 2017/4/22.
 */
/**
 * Created by lihao on 2017/4/22.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Platform,
    Image,
    RefreshControl
} from 'react-native';
import {connect} from 'react-redux'
import Swiper from 'react-native-swiper';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';
import SearchView from './Search';
import NewsList from './NewsList';
import typeImage from '../images/pictures/pic_food.png';
const screenWidth = WindowUtil.window.width;
const screenHeight = WindowUtil.window.height;

import HomeList from '../container/HomeList';

import bannerPic1 from '../images/pictures/banner_1.jpg';
import bannerPic2 from '../images/pictures/banner_2.jpg';
import bannerPic3 from '../images/pictures/banner_3.jpeg';
import bannerPic4 from '../images/pictures/banner_4.jpg';
const adImageArr = [bannerPic1, bannerPic2, bannerPic3, bannerPic4];

class Home extends Component {

    constructor(props) {
        super(props);
        //this.renderHeader = this.renderHeader.bind(this);  //没有涉及state的方法不需要绑定this
        this.state = {
            curAdImage: 0,
            isRefreshing: false
        }
    }

    componentDidMount() {
        this.interval = setInterval(function refreshPic() {
            let curAdImageNum = this.state.curAdImage;
            if (curAdImageNum < adImageArr.length - 1) {
                this.setState({
                    curAdImage: ++this.state.curAdImage
                });
            } else {
                this.setState({
                    curAdImage: 0
                });
            }
        }.bind(this), 3000);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }

    renderHeader() {
        const {onDrawerOpen, curuser} = this.props;
        return (
            <View style={styles.topView}>
                <View style={styles.toolbar}>
                    <TouchableOpacity
                        onPress={onDrawerOpen}
                        style={{
                            flexDirection: 'row',
                            height: 45,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                height: 20,
                                width: 10,
                            }}
                            source={require('../images/icons/icon_menu.png')}/>
                        <Image
                            style={{
                                height: 36,
                                width: 36,
                                borderRadius: 18,
                                marginLeft: 6
                            }}
                            source={require('../images/icons/icon_head_placeholder.png')}/>

                    </TouchableOpacity>
                    <Text
                        style={{
                            marginLeft: 6,
                            fontSize: 16,
                            color: ColorUtil.white
                        }}
                    >
                        {this.props.isLogin ? curuser.user_name? curuser.user_name: curuser.user_phone: '您尚未登录'}
                    </Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <TouchableOpacity>
                        <Image
                            style={{
                                height: 28,
                                width: 28,
                            }}
                            source={require('../images/icons/icon_chat.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: 20
                            }}
                            source={require('../images/icons/icon_alert.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: 20,
                                marginRight: 18
                            }}
                            source={require('../images/icons/icon_scan.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderSearchView() {
        const {navigator} = this.props;
        return (
            <View style={{
                height: 34,
                width: WindowUtil.window.width,
                backgroundColor: ColorUtil.themeColor,
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <View
                    style={{
                        height: 30,
                        width: WindowUtil.window.width - 30,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: "center",
                    }}
                >
                    <Image source={require('../images/icons/icon_search_dark.png')}
                           style={{width: 16, height: 16, marginRight: 12}}/>
                    <TouchableOpacity
                        onPress={() => {
                            navigator.push({
                                component: SearchView,
                                name: 'SearchView',
                                args: {
                                    name: '搜索页面'
                                }
                            })
                        }}
                    ><Text
                        style={{
                            fontSize: 14,
                            color: ColorUtil.deepGray
                        }}
                    >请输入搜索内容</Text></TouchableOpacity>
                </View>

            </View>
        )
    }

    renderRecommend() {
        let recommendArr = ['LPL全军覆没', 'LPL全军覆没', 'LPL全军覆没', 'LPL全军覆没', 'LPL全军覆没'];
        if (recommendArr.length >= 3) {
            recommendArr = recommendArr.slice(0, 3);
        }
        return (
            <View
                style={{
                    width: screenWidth,
                    height: 22,
                    backgroundColor: ColorUtil.themeColor,
                    flexDirection: 'row',
                }}
            >
                {
                    recommendArr.map((item, position) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    alert(item);
                                }}
                                key={position}
                            >
                                <Text
                                    key={position}
                                    style={{
                                        color: 'white',
                                        fontSize: 14,
                                        marginLeft: 10
                                    }}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    renderAdvertisement() {

        return (
            <View
                style={{
                    width: screenWidth,
                    height: 150,
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        alert('广告位置:' + this.state.curAdImage)
                    }}
                >
                    <Image
                        style={{
                            width: screenWidth - 12,
                            height: 138,
                            margin: 6,
                            borderRadius: 12
                        }}
                        resizeMode='cover'
                        source={adImageArr[this.state.curAdImage]}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }

    renderButtonGroup() {
        const itemWidth = screenWidth / 4;
        const itemheight = itemWidth * 0.6 + 20;
        let renderSwipeView = (types) => {
            return (
                <View style={styles.swipItem}>
                    {
                        types.map((item, position) => {
                            return (
                                <TouchableHighlight
                                    key={position}
                                    onPress={() => {
                                        this.props.navigator.push({
                                            component: NewsList,
                                            name: 'NewsList',
                                            args: {
                                                name: '我的信息'
                                            }
                                        })
                                    }}
                                    style={{width: itemWidth, height: itemheight}}
                                >
                                    <View style={[{width: itemWidth, height: itemheight}, styles.typesItem]}>
                                        <Image source={typeImage}
                                               style={{width: itemWidth * .5, height: itemWidth * .5}}/>
                                        <Text style={{fontSize: 12, color: "#666"}}>{item}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            )
        };
        return (
            <Swiper
                height={itemheight * 2.4}
                paginationStyle={{bottom: 10}}
                dotStyle={{backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6}}>
                {renderSwipeView(['美食', '甜品饮品', '商店超市', '预定早餐', '果蔬生鲜', '新店特惠', '准时达', '高铁订餐'])}
                {renderSwipeView(['土豪推荐', '鲜花蛋糕', '汉堡炸鸡', '日韩料理', '麻辣烫', '披萨意面', '川湘菜', '包子粥店'])}
            </Swiper>
        )
    }

    renderListView() {
        const listArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {
                    listArr.map((item, positon) => {
                        return (
                            <Text
                                key={positon}
                                style={{
                                    height: 50,
                                    fontSize: 18,
                                }}
                            >
                                {"当前条目项:" + item}
                            </Text>
                        )
                    })
                }
            </View>

        )
    }

    renderDivider() {
        return (
            <View
                style={{
                    height: 6,
                    width: WindowUtil.window.width,
                    backgroundColor: ColorUtil.nearlyWhite
                }}
            />
        )
    }


    render() {
        const {onDrawerOpen, navigator, onHomeRefresh} = this.props;
        return (
            <ScrollView
                keyboardDismissMode="on-drag"
                style={styles.container}
                showsVerticalScrollIndicator={false}
                onScroll={() => {
                    console.log('滑动中')
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        colors={['#2196FC', '#00ff00']}
                        progressBackgroundColor="#ffffff"
                        onRefresh={onHomeRefresh}
                    />
                }
            >
                {this.renderHeader()}
                {this.renderSearchView()}
                {this.renderRecommend()}
                {this.renderDivider()}
                {this.renderButtonGroup()}
                {this.renderDivider()}
                {this.renderAdvertisement()}
                {this.renderDivider()}
                <HomeList {...this.props}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    topView: {
        height: Platform.OS == "ios" ? 75 : 55,
        width: WindowUtil.window.width,
        backgroundColor: '#2196FC',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    toolbar: {
        height: 55,
        width: WindowUtil.window.width,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    swipItem: {
        paddingBottom: 10,
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    typesItem: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.loginReducer.isLogin,
        curuser: state.loginReducer.user
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

