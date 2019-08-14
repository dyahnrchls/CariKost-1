import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import Explore from '../Explore'
import Search from '../Search'
import WishList from '../../WishList/WishList'
import City from '../City/City'
import Detail from '../City/Detail'
import List from '../City/List'
import Map from '../City/Map'

const AppNavigator = createStackNavigator({
    Explore: {
        screen: Explore
    }, Search: {
        screen: Search
    }, WishList: {
        screen: WishList
    }, City: {
        screen: createMaterialTopTabNavigator({
            Map: {
                screen: Map
            }, List: {
                screen: List
            }
        },
            {
                tabBarOptions: {
                    activeTintColor: '#00a663',
                    inactiveTintColor: 'silver',
                    labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                    },
                    showLabel: true,
                    style: {
                        backgroundColor: 'white'
                    }, indicatorStyle: {
                        backgroundColor: '#00a663'
                    }
                },
            })
    }, Detail: {
        screen: Detail
    }
}, {
        initialRouteName: 'Explore',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

const AppNavigatorr = createAppContainer(AppNavigator);

class Index extends Component {
    render() {
        return (
            <AppNavigatorr />
        );
    }
}

export default Index

