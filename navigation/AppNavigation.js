import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import theme from "../constants/theme";

const defaultNavOptions = {

};


const HomeStackNavigator = createStackNavigator();
export const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <HomeStackNavigator.Screen
                name={'Home'}
                component={Home}
                // options={}
            />
        </HomeStackNavigator.Navigator>
    )
}

const ChatStackNavigator = createStackNavigator();
export const ChatNavigator = () => {
    return (
        <ChatStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <ChatStackNavigator.Screen
                name={'Chat'}
                component={Chat}
                // options={}
            />
        </ChatStackNavigator.Navigator>
    )
}

const BallStackNavigator = createStackNavigator();
export const BallNavigator = () => {
    return (
        <BallStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <BallStackNavigator.Screen
                name={'Ball'}
                component={Ball}
                // options={}
            />
        </BallStackNavigator.Navigator>
    )
}

const GameStackNavigator = createStackNavigator();
export const GameNavigator = () => {
    return (
        <GameStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <GameStackNavigator.Screen
                name={'Game'}
                component={Game}
                // options={}
            />
        </GameStackNavigator.Navigator>
    )
}

const ProfileStackNavigator = createStackNavigator();
export const ProfileNavigator = () => {
    return (
        <ProfileStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <ProfileStackNavigator.Screen
                name={'Profile'}
                component={Profile}
                // options={}
            />
        </ProfileStackNavigator.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();

export const DrivingTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <Entypo name='Home' size={24} color={color} />
                    } else if (route.name === 'Chat') {
                        return <Ionicons name="chatbubbles-outline" size={24} color={color} />
                    } else if (route.name === 'Ball') {
                        return <Ionicons name="ios-football" size={24} color={color} />
                    } else if (route.name === 'Game') {
                        return <MaterialCommunityIcons name="gamepad-variant" size={24} color={color} />
                    } else if (route.name === 'Profile') {
                        return <FontAwesome5 name="user" size={24} color={color} />
                    }
                },
            })}
            activeColor={theme.colors.green}
            labeled={false}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
            />
            <Tab.Screen
                name="Chat"
                component={ChatNavigator}
            />
            <Tab.Screen
                name="Ball"
                component={BallNavigator}
            />
            <Tab.Screen
                name="Game"
                component={GameNavigator}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileNavigator}
            />
        </Tab.Navigator>
    );
};



const AppNavigation = () => {
    return (
        <NavigationContainer>
            <DrivingTabs />
        </NavigationContainer>
    );
}

export default AppNavigation;
