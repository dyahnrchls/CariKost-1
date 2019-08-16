import React,  { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity,Text, TextInput, Button }from 'react-native';
import {SearchBar} from 'react-native-elements';

import GreyButton  from '../components/grey-button'


export default class Iklan extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }
    render(){
        return(
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.field}>
                                <Text style={ styles.text }>Nama Kost *</Text>
                            <TextInput placeholder='masukan nama kost' underlineColorAndroid='#00b894' ></TextInput>
                                <Text style={styles.text}>Alamat Kost  *</Text>
                            <TextInput placeholder='masukan alamat kost' underlineColorAndroid='#00b894' ></TextInput>
                                <Text style={styles.text}>Search Alamat *</Text>
                                {/* <SearchBar placeholder='Type heree' onChange={this.updateSearch} value={this.state.search}/> */}
                            <TextInput placeholder='harusnya ini search bar&peta' underlineColorAndroid='#00b894' ></TextInput>
                                <Text style={styles.map}></Text>
                                <Text style={styles.text}>Pemilik Kost *</Text>
                            <TextInput placeholder='masukan nama pemilik kost' underlineColorAndroid='#00b894' ></TextInput>
                                <Text style={styles.text}>Nomor handphone Pemilik Kost *</Text>
                            <TextInput placeholder='masukan nomor telepon pemilik kost' underlineColorAndroid='#00b894' ></TextInput>
                                <Text style={styles.text}>Pengelola Kost</Text>
                            <TextInput placeholder='masukan nama pengelola kost' underlineColorAndroid='#00b894' ></TextInput>
                                <Text style={styles.text}>No. Hp Pengelola Kost</Text>
                            <TextInput placeholder='masukkan nomor telepon pengelola kost' underlineColorAndroid='#00b894' ></TextInput>
                        </View>
                    </View>
                </ScrollView>
                <GreyButton text="Submit"/>
            </View>
            
        )
    }

    // updateSearch = (event) => {
    //     this.setState({
    //         search: event.target.value
    //     })
    // }

    backToProfile = () => {
        this.props.navigation.navigate('Profile');
    }

    callCenter = () => {
        this.props.navigation.navigate('CallCenter');
    }
}

const styles = StyleSheet.create({
    map: {
        backgroundColor: '#dfe6e9',
        padding: 20,
        height: 95,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        marginRight:  10,
        height: 200,
        marginTop: 10,
        marginBottom: 10
    },
    text: { 
        paddingLeft: 8,
        fontWeight: 'bold'
    },
    field: {
        marginLeft: 8, 
        marginTop: 10,
        marginBottom: 50,
        marginRight: 8
    },
})