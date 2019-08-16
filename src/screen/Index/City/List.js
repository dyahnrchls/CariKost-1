import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';
import { Card } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';


const houses = [
    {
        name: "Kost Monggo Mlebet",
        address: "Jalan Kaurangan no 23 Jurangmangu",
        price: 300000,
        place: 'Bandung',
        type: 'Putri',
        longitude: -6.28129,
        latitude: 106.731233,
        cover:
            "https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg"
    },
    {
        name: "Kost Andrean",
        address: "Jalan Dealova no 34 Sawah Lama",
        price: 240000,
        place: 'Semarang',
        type: 'Putri',
        longitude: -6.28392,
        latitude: 106.723822,
        cover:
            "https://cdn1-production-images-kly.akamaized.net/-R-MC5UiFfF97UD8h0BCAk27E0w=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/861628/original/073424800_1429960385-3.JPG"
    },
    {
        name: "Kost Ibu Dea",
        address: "Jalan Ciater Raya no 11 Ciater Raya",
        price: 120000,
        place: 'Jakarta',
        type: 'Putra',
        longitude: -6.28229,
        latitude: 106.722812,
        cover:
            "https://storage.jualo.com/original/13513595/rumah-kost-mewah-387-kost-dijual-13513595.jpg"
    },
    {
        name: "Kost Dor Dor",
        address: "Jalan Descute no 65 Ciater Raya",
        price: 290000,
        place: 'Surabaya',
        type: 'Campur',
        longitude: -6.27713,
        latitude: 106.739182,
        cover:
            "https://merahputih.com/media/f0/0e/00/f00e00aa78e4983995f4c01cb2787dea.jpg"
    },
    {
        name: "Rawabuntu Home",
        address: "Rawabuntu Cicentang RT. 5 RW. 5",
        price: 190000,
        place: 'Yogyakarta',
        type: 'Putra',
        longitude: -6.287666,
        latitude: 106.74031,
        cover:
            "https://apollo-singapore.akamaized.net/v1/files/3mpiwre5zf4x-ID/image;s=966x691;olx-st/_1_.jpg"
    },
    {
        name: "Ciledug Homebase",
        address: "Jalan Ciledug no 76 Ciledug Tangerang",
        price: 143000,
        place: 'Denpasar',
        type: 'Campur',
        longitude: -6.282206,
        latitude: 106.727602,
        cover:
            "https://www.simplyhomy.com/wp-content/uploads/2018/08/bisnis-kos-kosan.jpg"
    }
]

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: houses
        }
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    keyExtractor={item => item.name}
                    data={this.state.houses}
                    renderItem={({ item: rowData }) => {
                        return (
                            <View style={styles.container}>
                                <TouchableHighlight underlayColor='white' onPress={() => this.props.navigation.navigate('Detail', {
                                    name: rowData.name,
                                    cover: rowData.cover,
                                    type: rowData.type,
                                    price: rowData.price,
                                    place: rowData.place,
                                    address: rowData.address
                                })}>
                                    <Card
                                        image={{ uri: rowData.cover }}
                                    >
                                        <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>{rowData.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 5 }}>
                                            <Text style={{ color: 'red', marginLeft: 5 }}>{rowData.type}</Text>
                                            <Text style={styles.textHEader}>{rowData.place}</Text>
                                        </View>
                                        <View style={{ marginLeft: 5, marginTop: 5 }}>
                                            <Text style={{ color: '#00a663', marginBottom: 5, fontSize: 18 }}>IDR. {rowData.price}</Text>
                                            <Text>{rowData.address}</Text>
                                        </View>
                                    </Card>
                                </TouchableHighlight>
                            </View >
                        )
                    }}
                />
            </ScrollView>
        )
    }
}

List.navigationOptions = {
    tabBarLabel: 'List'
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 2,
        paddingRight: 2
    }, textHEader: {
        marginLeft: 9,
    }
})