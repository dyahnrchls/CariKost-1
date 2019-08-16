import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const { Latitude, Longitude, Title } = params
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: Latitude,
                        longitude: Longitude,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.09,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: Latitude,
                            longitude: Longitude
                        }}
                        title={Title}
                    />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});