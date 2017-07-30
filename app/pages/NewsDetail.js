/**
 * Created by lihao on 2017/4/23.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'antd-mobile';
import Toolbar from '../container/Toolbar';
import WindowUtil from '../utils/WindowUtil';
import {getLocalNewsByID, GET_DETAIL_SUCCESS, GET_DETAIL_FAIL, GET_DETAIL_START} from '../redux/actions/NewsDetailAction';
import ColorUtil from '../utils/ColorUtils';
const screenWidth = WindowUtil.window.width;
const screenHeight = WindowUtil.window.height;

const options = {
    title: '请选择图片来源',
    cancelButtonTitle: '取消选择',
    takePhotoButtonTitle: '拍照上传',
    chooseFromLibraryButtonTitle: '从相册选择',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class NewsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    renderContent() {
        return(
            <View>

            </View>
        )
    }

    componentDidMount() {
        console.log(this.props.newsContent)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.newsStatus);
        if(this.props.newsStatus === GET_DETAIL_START && nextProps.newsStatus === GET_DETAIL_SUCCESS){
            this.setState({
                title: nextProps.newsContent.news_title,
                content: nextProps.newsContent.news_content
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Toolbar titleText="HomeDetail" onLeftPress={this.props.navigator.pop} {...this.props} />
                <ScrollView>
                    <Image
                        style={styles.newsPic}
                        source={require('../images/pictures/banner_4.jpg')}
                    />
                    <Text
                        style={styles.newsTitle}
                    >
                        {this.state.title}
                    </Text>
                    <Text
                        style={styles.newsContent}
                    >
                        {this.state.content}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    newsPic: {
        width: screenWidth,
        height: screenWidth * 0.45
    },
    newsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        lineHeight: 28
    },
    newsContent: {
        fontSize: 18,
        margin: 20,
        marginTop: 15,
        lineHeight: 22
    }
});

const mapStateToProps = (state, ownProps) => {

    return {
        newsContent: state.newsDetailReducer.news,
        newsStatus: state.newsDetailReducer.status,
        newsError: state.newsDetailReducer.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        refreshNewsDetail: (newsID) => {
            dispatch(getLocalNewsByID(newsID));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);

