import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Profile from '../Profile'

const AppNavigator = createStackNavigator({
    Profile: {
        screen: Profile
    }, initialRouteName: 'Profile'
})

const AppNavigatorr = createAppContainer(AppNavigator);

class Index extends Component {
    render() {
        return (
            <AppNavigatorr />
        );
    }
}

export default Index

