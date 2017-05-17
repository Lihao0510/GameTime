/**
 * Created by lihao on 2017/4/23.
 */
/**
 * Created by lihao on 2017/4/22.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from 'antd-mobile';
import Toolbar from '../container/Toolbar';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: '请选择图片来源',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '相册图片',
    customButtons: [
        { name: 'hangge', title: 'hangge.com图片' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class NewsDetail extends Component {

    constructor(props) {
        super(props);
        this.openImagePicker = this.openImagePicker.bind(this);
    }

    openImagePicker() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('用户取消了选择！');
            }
            else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            }
            else if (response.customButton) {
                alert("自定义按钮点击：" + response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar titleText="HomeDetail" onLeftPress={this.props.navigator.pop} {...this.props} />
                <Text style={styles.welcome}>
                    Welcome Here!, {this.props.name}!
                </Text>
                <Button
                    type="primary"
                    style={{
                        height: 40,
                        width: 100
                    }}
                    onClick={this.openImagePicker}
                >
                    确定
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default NewsDetail;

