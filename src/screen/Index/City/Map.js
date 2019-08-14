import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Title } from 'react-native-paper';

export default class Map extends Component {
    render() {
        return (
            <View>
                <Text>this is map screen</Text>
            </View>
        )
    }
}

Map.navigationOptions = {
    tabBarLabel: 'Map'
};