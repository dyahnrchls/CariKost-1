import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class Detail extends Component {
    constructor() {
        super()
        this.state = {
            isPhoto: true
        }
    }

    changeToPhoto(isPhoto) {
        if (isPhoto) {
            return (
                <Image source={{ uri: 'https://www.simplyhomy.com/wp-content/uploads/2018/08/bisnis-kos-kosan.jpg' }} style={{ height: 230 }} />
            )
        } else {
            return (
                <View style={{
                    ...StyleSheet.absoluteFillObject,
                    height: 230,
                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ ...StyleSheet.absoluteFillObject }}
                        region={{
                            latitude: -7.275973,
                            longitude: 112.808304,
                            latitudeDelta: 0.09,
                            longitudeDelta: 0.09,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: -7.275973,
                                longitude: 112.808304
                            }}
                            title='asd'
                        />
                    </MapView>
                </View>
            )
        }
    }

    changeStatePhoto(param) {
        this.setState({
            isPhoto: param
        })
    }
    render() {
        const { params } = this.props.navigation.state;
        const { name, address, type, place, price } = params
        return (
            <View>
                <StatusBar
                    backgroundColor='#00a663'
                    barStyle='light-content'
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: 230 }}>
                            {this.changeToPhoto(this.state.isPhoto)}
                        </View>
                        <View style={styles.line}>
                            <TouchableOpacity onPress={() => this.changeStatePhoto(true)}>
                                <Icon name='photo-library' />
                                <Text>Foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.changeStatePhoto(false)}>
                                <Icon name='map' />
                                <Text>Peta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingLeft: 2, paddingRight: 5 }}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>
                            {name}
                        </Text>
                        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Icon name='favorite-border' size={27} color='#00a663' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name='share' size={27} color='#00a663' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, paddingRight: 8, marginTop: 10 }}>
                        <Text style={{ marginRight: 10, color: '#22a7f0', fontWeight: 'bold' }} >{type}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{place}</Text>
                    </View>
                    <View style={{ marginTop: 10, paddingLeft: 8 }}>
                        <Text>
                            {address}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 70, marginTop: 30 }}>
                        <View style={{ backgroundColor: 'silver', height: 1 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='flash-on' />
                                <Text style={{ marginTop: 2 }}>
                                    Termasuk Listrik
                            </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='attach-money' />
                                <Text style={{ marginTop: 2 }}>
                                    Min. 1 Th
                            </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'silver', height: 1 }} />
                    </View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 30, marginBottom: 30 }}>
                        <Text style={{ fontWeight: 'bold', color: '#00a663', marginBottom: 10 }}>Deskripsi Kost : </Text>
                        <Text style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga error aliquam odit temporibus nisi totam enim, obcaecati unde corrupti? In explicabo dignissimos cumque rem totam? Similique exercitationem expedita velit?
                        </Text>
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', color: '#00a663', marginBottom: 10 }}>Luas Kamar :</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='zoom-out-map' size={30} />
                                <Text style={{ marginLeft: 5, fontSize: 16, marginTop: 8 }}>3x3 m</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#f2f0f0', height: 110, marginBottom: 10, justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{ borderRadius: 50, backgroundColor: '#00a663', height: 70, width: 70, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='star-border' color='white' size={50} />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Pemilik Kost : </Text>
                            <Text>{name}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 60 }}>
                        <View style={{ backgroundColor: 'silver', height: 1 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 13, color: '#00a663', marginRight: 3 }}>IDR.</Text>
                                <Text style={{ marginTop: 10, fontSize: 20, color: '#00a663' }}>{price}</Text>
                                <Text style={{ color: '#00a663', marginTop: 16 }}>/bulan</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#f89406', height: 50, width: 140, borderRadius: 5, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }} >
                                    <Icon name='chat' color='white' size={30}></Icon>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Hubungi</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

Detail.navigationOptions = {
    tabBarLabel: 'Detail'
};

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#f2f0f0',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center'
    }
})