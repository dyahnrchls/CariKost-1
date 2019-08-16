import React, { Component } from 'react';
import { Text, Image,View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: ''
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../assets/undraw_Login_v483.png')} style={{width: 150, height: 150}}/>
                <View style={style.borderTextInput}>
                    <TextInput placeholder='username' onChange={this.update} style={style.inputField} value={this.state.login}></TextInput>
                </View>
                <View style={style.borderTextInput}>
                    <TextInput placeholder='password' style={style.inputField}></TextInput>
                </View>
                <Button onPress={this.onPressButton} title='sign in' color='#00a663'></Button>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Text>No account?</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}><Text style={{color:'blue'}}> Create One</Text></TouchableOpacity>
                </View>
            </View>
            )
    }

    update = (event) => {
        this.setState({
            login: event.target.value
        })
    }

    onPressButton = () => {
        if (this.state.login === 'Dyah') {
            alert('hore');
        } else {
            this.props.navigation.navigate('Explore');
            this.setState({
                login: ''
            })
        }
    }
}

const style = StyleSheet.create({
    borderTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        borderColor: 'grey',
        marginBottom: 10
    },
    inputField: {
        width: 300,
        height: 40,
        color: 'black',
        paddingLeft: 120
    },
    login: {
        fontSize: 40
    }
}
)