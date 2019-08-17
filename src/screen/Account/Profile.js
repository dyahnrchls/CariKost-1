import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const dataProfile = [
    {
        icon_name: 'ios-home',
        text: 'Houses'
    },
    {
        icon_name: 'ios-paper',
        text: 'Booking List'
    },
    {
        icon_name: 'ios-images',
        text: 'Ads'
    },
    {
        icon_name: 'ios-create',
        text: 'Account Verification'
    },
    {
        icon_name: 'ios-settings',
        text: 'Settings'
    },
    {
        icon_name: 'ios-call',
        text: 'Call Center'
    },
]

export default class Profile extends Component {


    render() {
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, justifyContent: 'space-between', paddingRight: 20, paddingLeft: 20, }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <Icon name='ios-person' size={40} />
                        <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                            <Text style={styles.Text}>Dyah</Text>
                            <Text style={styles.Text}>999786</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.editProfile}><Text style={{ color: 'blue' }}>Edit Profile</Text></TouchableOpacity>
                </View>

                {dataProfile.map((list, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.card}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name={list.icon_name} size={40} color='#00a663' />
                                <Text style={styles.Text}>{list.text}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                )}
            </ScrollView>
        )
    }

    editProfile = () => {
        this.props.navigation.navigate('EditProfile')
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 15,
        paddingLeft: 10,
        alignContent: 'center'
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