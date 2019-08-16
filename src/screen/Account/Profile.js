import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#dfe6e9' }}>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, justifyContent: 'space-between', paddingRight: 20, paddingLeft: 20 }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <Icon name='ios-person' size={40} color='#00a663' />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.Text}>Dyah</Text>
                            <Text style={styles.Text}>999786</Text>
                        </View>

                    </View>

                    <TouchableOpacity onPress={this.editProfile}><Text>Edit Profile</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='ios-home' size={40} color='#00a663' />
                        <Text style={styles.Text}>Kost Saya</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingPage')} style={styles.card}>
                    <Icon name="ios-paper" size={30} color='#00a663' />
                    <Text style={styles.Text}>Booking List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Iklan')}>
                    <Icon name="ios-images" size={30} color='#00a663' />
                    <Text style={styles.Text}>Data Iklan</Text>
                </TouchableOpacity>
                <View style={styles.card}>
                    <Icon name="ios-create" size={30} color='#00a663' />
                    <Text style={styles.Text}>Account Verification </Text>
                </View>
                <View style={styles.card}>
                    <Icon name="ios-settings" size={30} color='#00a663' />
                    <Text style={styles.Text}>Pengaturan</Text>
                </View>
                <TouchableOpacity style={styles.card} >
                    <Icon name='ios-call' size={30} color='#00a663' />
                    <Text style={styles.Text}>Hubungi CS</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    pressButton = () => {
        this.props.navigation.navigate('Login')
    }

    editProfile = () => {
        alert('coming soon');
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 15,
        marginLeft: 10
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        height: 70,
        borderRadius: 4,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
})