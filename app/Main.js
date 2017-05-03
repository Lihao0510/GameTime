/**
 * Created by lihao on 2017/4/23.
 */
import React from 'react'
import {Navigator, View, StatusBar, Platform} from 'react-native'
import Start from './HomePage'

class APP extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (Platform.OS == "ios" ? (
                <View style={{flex: 1}}>
                    <StatusBar
                        backgroundColor="#2196FC"
                        barStyle="light-content"
                    />
                    <Navigator
                        initialRoute={{component: Start}}
                        configureScene={(route, routeStack) => {
                            let configure = Navigator.SceneConfigs.PushFromRight;
                            switch (route.name) {
                                case 'NewsDetail':
                                    configure = Navigator.SceneConfigs.FadeAndroid;
                                    return{
                                        ...configure,
                                        gestures: {}
                                    };
                                    break;
                                default:
                                    return configure = Navigator.SceneConfigs.PushFromRight;
                                    break;
                            }
                        }}
                        renderScene={(route, navigator) => {
                            return <route.component navigator={navigator} {...route.args}/>
                        }
                        }
                    />
                </View>
            ) : (
                <View style={{flex: 1}}>
                    <StatusBar
                        backgroundColor="#2196FC"
                        barStyle="light-content"
                    />
                    <Navigator
                        initialRoute={{component: Start}}
                        configureScene={(route, routeStack) => {
                            let configure = Navigator.SceneConfigs.PushFromRight;
                            switch (route.name) {
                                case 'NewsDetail':
                                    configure = Navigator.SceneConfigs.FadeAndroid;
                                    return{
                                        ...configure,
                                        gestures: {}
                                    };
                                    break;
                                default:
                                    return configure = Navigator.SceneConfigs.PushFromRight;
                                    break;
                            }
                        }}
                        renderScene={(route, navigator) => {
                            return <route.component navigator={navigator} {...route.args}/>
                        }
                        }
                    />
                </View>
            )
        );
    }
}

export default APP;