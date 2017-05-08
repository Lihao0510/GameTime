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
    TouchableWithoutFeedback,
    Image,
    View,
    ListView,
    ScrollView,
    InteractionManager,
    TouchableOpacity
} from 'react-native';
import NewsDetail from './NewsDetail';
import Toolbar from '../container/Toolbar';
import RefreshListView, {RefreshState} from '../components/RefreshListView';
import NewsListItem from '../components/NewsListItem'
import ColorUtil from '../utils/ColorUtils';
import WindowUtil from '../utils/WindowUtil';
import bannerPic1 from '../images/pictures/banner_1.jpg';
import bannerPic2 from '../images/pictures/banner_2.jpg';
import bannerPic3 from '../images/pictures/banner_3.jpeg';
import bannerPic4 from '../images/pictures/banner_4.jpg';

const bannerImageArr = [bannerPic1, bannerPic2, bannerPic3, bannerPic4];
const bannerTextArr = ['本田CRV等你来', '天猫T恤节开始', 'TCL引领中国制造', '想不想强奸性虐小萝莉'];

class News extends Component {

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1 !== r2;
            }
        });
        let info = {
            title: '王尼玛强奸八旬老太,精尽人亡',
            content: 'numberOfLines 文本行数限制，添加后超过限制行数文本会在末尾默认以...的形式省略,但最让我亮眼...',
            from: '腾讯新闻',
            reader: 81
        };
        let newsArr = [];
        for (let i = 0; i < 15; i++) {
            newsArr.push(info);
        }

        this.state = {
            dataSource: ds.cloneWithRows(newsArr),
            curAdImage: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(function refreshPic() {
            let curAdImageNum = this.state.curAdImage;
            if (curAdImageNum < bannerImageArr.length - 1) {
                this.setState({
                    curAdImage: ++this.state.curAdImage
                });
            } else {
                this.setState({
                    curAdImage: 0
                });
            }
        }.bind(this), 4500);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }

    renderViewPager() {
        return (
            <View
                style={{
                    height: 270,
                    width: WindowUtil.window.width,
                    flexDirection: 'column',
                }}
            >
                <View
                    style={{
                        height: 180,
                        width: WindowUtil.window.width
                    }}
                >
                    <TouchableWithoutFeedback
                        onPress={
                            () => alert(this.state.curAdImage)
                        }
                    >
                        <Image style={{
                            height: 180,
                            width: WindowUtil.window.width
                        }
                        }
                               source={bannerImageArr[this.state.curAdImage]}
                        />
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            position: 'absolute',
                            height: 30,
                            bottom: 0,
                            width: WindowUtil.window.width,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#AEAEAE66'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: ColorUtil.nearlyWhite,
                                marginLeft: 15
                            }}
                        >
                            {bannerTextArr[this.state.curAdImage]}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: ColorUtil.nearlyWhite,
                                marginRight: 15
                            }}
                        >
                            {this.state.curAdImage + 1}/{bannerTextArr.length}
                        </Text>
                    </View>
                </View>
                {this.renderCategory()}
                <View
                    style={{
                        width: WindowUtil.width,
                        height: 1,
                        backgroundColor: ColorUtil.whiteGray
                    }
                    }
                />
            </View>
        )
    }

    renderCategory() {
        return (
            <View
                style={{
                    height: 89,
                    width: WindowUtil.width,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../images/logo/logo_lol.png')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 3,
                            fontSize:12,
                            color: ColorUtil.dark
                        }}
                    >
                        英雄联盟
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../images/logo/logo_dota.png')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 3,
                            fontSize:12,
                            color: ColorUtil.dark
                        }}
                    >
                        DOTA2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../images/logo/logo_nongyao.png')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 3,
                            fontSize:12,
                            color: ColorUtil.dark
                        }}
                    >
                        王者荣耀
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../images/logo/logo_stone.png')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 3,
                            fontSize:12,
                            color: ColorUtil.dark
                        }}
                    >
                        炉石传说
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    refreshData() {
        setTimeout(() => {
            this.refs.listView.endRefreshing(RefreshState.Failure);
        }, 900);
    }

    loadMoreData() {
        setTimeout(() => {
            this.refs.listView.endRefreshing(RefreshState.NoMoreData);
        }, 900);
    }


    render() {
        const {onDrawerOpen, onDrawerClose, navigator} = this.props;
        return (
            <View style={styles.container}>
                <Toolbar
                    onLeftPress={onDrawerOpen}
                    iconType={1}
                    titleText="游戏新闻"
                    rightIcon="SUBMIT"
                    {...this.props}
                />
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderViewPager()}
                    renderRow={(rowData) => {
                        return (
                            <NewsListItem
                                newsItem={rowData}
                                onPress={() => {
                                    navigator.push({
                                        component: NewsDetail,
                                        name: 'NewsDetail',
                                        args: {
                                            name: rowData.title
                                        }
                                    })
                                }}
                            />
                        )
                    }}
                    onHeaderRefresh={
                        this.refreshData()
                    }
                    onFooterRefresh={
                        this.loadMoreData()
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorUtil.white,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    banner: {
        height: 180,
        width: WindowUtil.window.width
    },
    bannerView: {
        height: 180,
        width: WindowUtil.window.width
    },
    bannerImage: {
        height: 180,
        width: WindowUtil.window.width
    },
    newsItemContainer: {
        width: WindowUtil.window.width,
        height: WindowUtil.window.height * 0.2,
        backgroundColor: ColorUtil.white,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default News;

