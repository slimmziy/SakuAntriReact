import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ListScreen from './screens/ListScreen';
import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
// import IsiMerchant from './screens/IsiMerchant'
import styles from './style/style';

export default createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Beranda',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-home' size={24} color={tintColor} />
            )
        }
    },
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarLabel: 'Antrianku',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-list' size={24} color={tintColor} />
            )
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'Akun',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-person' size={24} color={tintColor} />
            )
        }
    },
    // IsiMerchant: {
    //     screen: IsiMerchant,
    //     navigationOptions: {
    //         tabBarLabel: 'Sub',
    //         tabBarIcon: ({ tintColor }) => (
    //             <Icon name='md-settings' size={24} color={tintColor} />
    //         )
    //     }
    // }
},

{//router config
initialRouteName: 'Home',
activeTintColor: '#4DC9FF',
}

);