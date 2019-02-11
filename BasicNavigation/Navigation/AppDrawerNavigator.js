import React, { Component }  from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import DashboardScreen from '../Screens/Dashboard/DashboardScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: HomeScreen,
    Dashboard: DashboardScreen,
})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({navigation}) => ({
            title:'App',
            headerTitleStyle: {
                marginLeft: 100,
              },
            headerLeft:(
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{paddingHorizontal: 10}}> 
                        <Icon name="md-menu" size={24} />
                    </View>
                </TouchableOpacity>
            )
        })
    }
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator
});

export default AppDrawerNavigator;