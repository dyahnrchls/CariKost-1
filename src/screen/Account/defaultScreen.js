import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'



export default class GreyButton extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingTop: 150}}>
                    {/* <Icon name='trending-up' size={100}/> */}
                <Image source={require('../assets/undraw_mobile_login_ikmv.png')} style={{width: 250, height: 250}}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress= {() => this.props.navigation.navigate('Login')} style={{ backgroundColor: '#00a663', height: 30, marginRight: 20, width: '40%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }} >
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress= {() => this.props.navigation.navigate('Register')} style={{ backgroundColor: '#00a663', height: 30, width: '40%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }} >
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    }
})