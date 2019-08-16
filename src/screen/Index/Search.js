import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { Appbar } from 'react-native-paper'

export default class MyComponent extends Component {

    _onSearch = () => console.log('Searching');

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => this.props.navigation.navigate('Explore')}
                />
                <TextInput style={styles.header} placeholder="Masukan nama kota" />
            </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: 250,
        borderColor: 'black',
    }
})