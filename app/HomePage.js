/**
 * Created by lihao on 2017/4/22.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    BackAndroid,
    Platform,
    StatusBar
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import DrawerLayout from 'react-native-drawer'
import {connect} from 'react-redux';
import DrawerView from './components/DrawerView'
import Home from './pages/Home'
import News from './pages/News'
import Funny from './pages/Funny'
import System from './pages/System'

import {openDrawer, closeDrawer} from './redux/actions/DrawerAction'
import {initList} from './redux/actions/HomeListAction'

const drawerStyles = {
    drawer: {shadowColor: '#333333', shadowOpacity: 3, shadowRadius: 3},
    main: {paddingLeft: 0},
}

class WisdomNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
        this.onBackAndroid = this._onBackAndroid.bind(this);
    }


    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    _onBackAndroid() {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    }

    render() {
        const {onDrawerOpen, onDrawerClose} = this.props;
        return (
            <DrawerLayout
                type="static"
                content={<DrawerView {...this.props}/>}
                openDrawerOffset={90}
                onClose={onDrawerClose}
                styles={drawerStyles}
                open={this.props.open}
                tweenHandler={DrawerLayout.tweenPresets.parallax}
            >
                <TabNavigator
                    tabBarStyle={styles.tabStyle}
                >
                    <TabNavigator.Item
                        title="首页"
                        renderIcon={() => <Image source={require('./images/icons/icon_home_normal.png')}
                                                 style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('./images/icons/icon_home_selected.png')}
                                                         style={styles.iconStyle}/>}
                        selected={this.state.selectedTab == 'home'}
                        onPress={ () => this.setState({
                            selectedTab: 'home'
                        })}
                        titleStyle={styles.titleStyle}
                    >
                        <Home {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="新闻"
                        renderIcon={() => <Image source={require('./images/icons/icon_news_normal.png')}
                                                 style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('./images/icons/icon_news_selected.png')}
                                                         style={styles.iconStyle}/>}
                        selected={this.state.selectedTab == 'news'}
                        onPress={ () => this.setState({
                            selectedTab: 'news'
                        })}
                        titleStyle={styles.titleStyle}
                    >
                        <News {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="论坛"
                        renderIcon={() => <Image source={require('./images/icons/icon_funny_normal.png')}
                                                 style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('./images/icons/icon_funny_selected.png')}
                                                         style={styles.iconStyle}/>}
                        selected={this.state.selectedTab == 'funny'}
                        onPress={ () => this.setState({
                            selectedTab: 'funny'
                        })}
                        titleStyle={styles.titleStyle}
                    >
                        <Funny {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        renderIcon={() => <Image source={require('./images/icons/icon_system_normal.png')}
                                                 style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('./images/icons/icon_system_selected.png')}
                                                         style={styles.iconStyle}/>}
                        selected={this.state.selectedTab == 'system'}
                        onPress={ () => this.setState({
                            selectedTab: 'system'
                        })}
                        titleStyle={styles.titleStyle}
                    >
                        <System {...this.props}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </DrawerLayout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: 25,
        height: 25,
        marginTop: 3,
    },
    titleStyle: {
        fontSize: 11,
        marginBottom: 3
    },
    tabStyle: {
        backgroundColor: 'white'
    },
    drawerStyle: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
    }
});

/*
 * mapStateToProps中的参数,会反映在当前组件的this.props中
 * 使用时用 const {open} = this.props; 调用
 * */
const mapStateToProps = (state, ownProps) => {

    return {
        open: state.drawerReducer.open
    }
};

/*
 * mapDispatchToProps中的方法,会体现在当前组件的this.props中
 * 使用时用 const { onDrawerOpen, onDrawerClose } = this.props; 调用
 * */
const mapDispatchToProps = (dispatch, ownProps) => {

    return {

        onDrawerOpen: () => {
            dispatch(openDrawer());
        },

        onDrawerClose: () => {
            dispatch(closeDrawer());
        },

        onHomeRefresh: () => {
            dispatch(initList())
        }

    }
};

//高阶函数,Redux中的容器组件必须由connect生成
export default connect(mapStateToProps, mapDispatchToProps)(WisdomNews);

