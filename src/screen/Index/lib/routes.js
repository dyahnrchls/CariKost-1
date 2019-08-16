import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import Explore from '../Explore'
import Search from '../Search'
import WishList from '../../WishList/WishList'
import City from '../City/City'
import Detail from '../City/Detail'
import List from '../City/List'
import Map from '../City/Map'


const AppTabNav = createMaterialTopTabNavigator(
    {
        Map: Map,
        List: List,
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
    }
)

const AppNavigator = createStackNavigator({
    Explore: {
        screen: Explore
    }, Search: {
        screen: Search
    }, WishList: {
        screen: WishList
    }, City: {
        screen: AppTabNav,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }
    }, Detail: {
        screen: Detail,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00a663'
            },
            headerTintColor: 'white'
        }
    }
}, {
        initialRouteName: 'Explore',

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

