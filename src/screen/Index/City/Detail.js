import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar } from 'react-native-paper';

export default class Detail extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const name = params ? params.name : null;
        return (
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => this.props.navigation.navigate('List')}
                />
                <Appbar.Content title={name} />
            </Appbar.Header>
        )
    }
}

Detail.navigationOptions = {
    tabBarLabel: 'Detail'
};