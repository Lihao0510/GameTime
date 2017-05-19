/**
 * Created by lihao on 2017/4/22.
 */
/**
 * Created by lihao on 2017/4/22.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Banner from 'react-native-swiper';
import Toolbar from '../container/Toolbar';
import { Popup, Button } from 'antd-mobile';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';
import ForumList from './ForumList';

import bannerPic1 from '../images/pictures/banner_1.jpg';
import bannerPic2 from '../images/pictures/banner_2.jpg';
import bannerPic3 from '../images/pictures/banner_3.jpeg';
import bannerPic4 from '../images/pictures/banner_4.jpg';
const adImageArr = [bannerPic1, bannerPic2, bannerPic3, bannerPic4];

const forumModules = [{
    moduleKey: 0,
    moduleName: '新人交流',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 1,
    moduleName: '符文之地',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 2,
    moduleName: 'Dota大厅',
    moduleImg: require('../images/logo/logo_dota.png')
}, {
    moduleKey: 3,
    moduleName: '炉石酒馆',
    moduleImg: require('../images/logo/logo_stone.png')
}, {
    moduleKey: 4,
    moduleName: '王者荣耀',
    moduleImg: require('../images/logo/logo_nongyao.png')
}, {
    moduleKey: 5,
    moduleName: '艾泽拉斯',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 6,
    moduleName: '枪王战场',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 7,
    moduleName: '皇室之家',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 8,
    moduleName: '手游广场',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 9,
    moduleName: '单机大作',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 10,
    moduleName: '符文之地',
    moduleImg: require('../images/logo/logo_lol.png')
}, {
    moduleKey: 11,
    moduleName: '交友板块',
    moduleImg: require('../images/logo/logo_lol.png')
},];

class Funny extends Component {

    constructor(props) {
        super(props);
        this.checkIn = this.checkIn.bind(this);
        this.closeCheckIn = this.closeCheckIn.bind(this);
    }

    checkIn() {
        Popup.show(
            <View
                style={{
                    width: WindowUtil.width,
                    height: 300,
                    backgroundColor: ColorUtil.white,
                    alignItems: 'center',
                }}
            >
                <Button
                    type="primary"
                    style={{
                        alignSelf: 'flex-end',
                        height: 30,
                        width: 50,
                        marginRight: 10,
                        marginTop: 6
                    }}
                    size="small"
                    onClick={this.closeCheckIn}
                >
                    取消
                </Button>
                <Text
                    style={{
                        position: 'absolute',
                        top: 12,
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >
                    发布说说
                </Text>
                <TextInput
                    maxLength={120}
                    style={{
                        position: 'absolute',
                        width: WindowUtil.width - 24,
                        borderWidth: 1.8,
                        borderColor: ColorUtil.darkBule,
                        borderRadius: 6,
                        padding: 9,
                        top: 50,
                        bottom: 60,
                        left: 15,
                        right: 15,
                        fontSize: 16,
                        lineHeight: 20,
                    }}
                    multiline={true}
                    underlineColorAndroid="transparent"
                />
                <Button
                    type="primary"
                    onClick={this.closeCheckIn}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: WindowUtil.width,
                        height: 50,
                        borderRadius: 0
                    }}
                >
                    确认发布
                </Button>
            </View>
            , { animationType: 'slide-up', maskClosable: true });
    }

    closeCheckIn() {
        Popup.hide();
    }

    renderBanner() {

        return (
            <Banner
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                height={200}
                paginationStyle={{ bottom: 10 }}
                dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6 }}
                activeDotStyle={{ backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6 }}>
                {
                    adImageArr.map((item, position) => {
                        return (
                            <TouchableWithoutFeedback
                                key={position}
                                onPress={() => {
                                    alert(position)
                                }}
                            >
                                <Image
                                    key={position}
                                    style={{
                                        height: 200,
                                        width: WindowUtil.width
                                    }}
                                    source={item}
                                />
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </Banner>
        )
    }

    renderGrid() {

        return (
            <View
                style={styles.gridView}
            >
                {
                    forumModules.map((item, position) => {
                        return (
                            <TouchableOpacity
                                key={position}
                                style={styles.gridItem}
                                onPress={() => {
                                    this.props.navigator.push({
                                        component: ForumList,
                                        name: 'FormList',
                                        args: {
                                            titleText: item.moduleName
                                        }
                                    })
                                }}
                            >
                                <Image
                                    style={styles.gridImage}
                                    source={item.moduleImg}
                                />
                                <Text
                                    style={styles.gridText}
                                >
                                    {item.moduleName}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )


    }

    render() {
        const { onDrawerOpen, onDrawerClose, navigator } = this.props;
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <Toolbar
                    rightIcon="CHECKIN"
                    onLeftPress={onDrawerOpen}
                    onRightPress={this.checkIn}
                    iconType={1}
                    titleText="水友论坛"
                    {...this.props}
                />
                {this.renderBanner()}
                {this.renderGrid()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    gridView: {
        backgroundColor: ColorUtil.middleGray,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-around'
    },
    gridItem: {
        backgroundColor: ColorUtil.white,
        height: 108,
        width: WindowUtil.window.width / 3 - 1,
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    gridText: {
        color: ColorUtil.deepDark,
        fontSize: 16
    },
    gridImage: {
        marginTop: 10,
        width: 54,
        height: 54,
        borderRadius: 27
    }
});

export default Funny;

