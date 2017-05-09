/**
 * Created by lihao on 2017/4/23.
 */
import React from 'react';
import {Navigator, View, StatusBar, Platform} from 'react-native';
import Start from './HomePage';
import {connect} from 'react-redux';
import {login, logout} from './redux/actions/LoginAction';

class APP extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        storage.load({
            key: 'CurUser',
            autoSync: false,
            syncInBackground: false
        }).then((result) => {
            if (result && result.user_phone !== '') {
                this.props.onLoginOK(result)
            } else {

            }
        }).catch(err => {

        });
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
                                case 'SearchView':
                                    configure = Navigator.SceneConfigs.FadeAndroid;
                                    return {
                                        ...configure,
                                        gestures: {}
                                    };
                                    break;
                                case 'Contribute':
                                    configure = Navigator.SceneConfigs.FloatFromBottom;
                                    return {
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
                                case 'SearchView':
                                    configure = Navigator.SceneConfigs.FadeAndroid;
                                    return {
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.loginReducer.isLogin,
        curuser: state.loginReducer.user
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        onLoginOK: (user) => {
            dispatch(login(user));
        },

        onLogoutOK: () => {
            dispatch(logout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(APP);