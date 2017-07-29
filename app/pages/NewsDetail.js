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
import HtmlText from '../components/HtmlText'
import {Button} from 'antd-mobile';
import Toolbar from '../container/Toolbar';
import ImagePicker from 'react-native-image-picker';
import WindowUtil from '../utils/WindowUtil';
import ColorUtil from '../utils/ColorUtils';
const screenWidth = WindowUtil.window.width;
const screenHeight = WindowUtil.window.height;

const htmlText = '<p>请选择图片来源</p><p>请选择图片来源</p><p>请选择图片来源</p>';

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
    }

    renderContent() {
        return(
            <View>

            </View>
        )
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
                        OMG群访：想以第一的名次进入季后赛
                    </Text>
                    <Text
                        style={styles.newsContent}
                    >
                        Q ：更新版本之后很多坦克英雄又可以重新上场了，你觉得这个版本改动是否会对OMG的打法产生影响？\n
                        教练：其实不是对我们的影响，大多数队伍能跟上版本的速度，我们队伍选手比较勤奋，练英雄的速度也很快，所以应该能比较快的适应版本吧。\n
                        Q：7.14版本是肉坦天下，今天大虫子中上两个位置都被选出来过，你怎么看待这个英雄？\n
                        夕阳：就线上推线挺快的，线上也挺厉害的，就是容易被抓，然后也非常地肉。\n
                        Q：第二局在30分钟的时候，夕阳在下路以一敌二，救赎和加里奥大招都晚了一些，当时是怎么沟通的呢？\n
                        夕阳：当时我以为他们能推上路，我也没有叫别人来帮忙，然后他们估计看我拼起来，就给了我一个救赎。\n
                        Q：第一局比赛双方打的十分胶着，夕阳单带掉对面的门牙塔为最终的胜利打下了重要的基础，当时是怎么决策的？\n
                        夕阳：因为我看他们打了大龙，我可以tp去保那个塔，我以为能把基地拆掉的，结果没有拆掉。\n
                        Q：第一局夕阳后期TP到IM门牙塔偷家，当时队内是怎么沟通的？\n
                        夕阳：就是能拖就拖吧，看能不能把家给偷了。\n
                        Q：第一局你们选出了四个坦克，是出于什么考虑才选择这样的阵容？\n
                        夕阳：因为版本的更新吧，然后我们也有练过这个阵容。\n
                        Q：风女第二局前期裸了一个香炉，眼石都没有出，当时是怎么考虑的？\n
                        小五：就线上比较好打吧。\n
                        Q：在两场比赛中选择的都是前排英雄，节奏也相对放缓，是考虑版本问题做的改动吗？\n
                        Icon：就多尝试一下不同的风格吧，然后这个版本中单应该什么都能玩，就多尝试一下吧。\n
                    </Text>
                    <HtmlText
                        style={{
                            width: screenWidth,
                            marginTop: 15,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        html={htmlText}
                    />
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

export default NewsDetail;

