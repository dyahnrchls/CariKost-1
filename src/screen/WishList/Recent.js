import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Recent extends Component {
    render() {
        return (
            <View>
                <Text>this is setting screen</Text>
            </View>
        )
    }
}

Recent.navigationOptions = {
    tabBarLabel: 'Dilihat',
};