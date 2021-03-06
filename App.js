import React, { Component } from 'react';
import { YellowBox } from 'react-native'
import { BottomNavigation, DefaultTheme, Text, Provider, Colors } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons'

import routes from './src/screen/Index/lib/routes'
import WishList from './src/screen/WishList/WishList'
import Account from './src/screen/Account/lib/routes'

YellowBox.ignoreWarnings(['ViewPagerAndroid']);
const Chat = () => <Text>Chat</Text>;


class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'index', title: 'Index', icon: 'search' },
      { key: 'wishlist', title: 'WishList', icon: 'favorite-border' },
      { key: 'chat', title: 'Chat', icon: 'chat-bubble-outline' },
      { key: 'account', title: 'Account', icon: 'person' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    index: routes,
    wishlist: WishList,
    chat: Chat,
    account: Account
  });

  render() {
    return (
      <Provider theme={theme}>
        <BottomNavigation
          shifting={false}
          activeColor='#00a663'
          inactiveColor='silver'
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </Provider>
    );
  }
}

export default App

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white
  }
}