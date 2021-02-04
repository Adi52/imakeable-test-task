import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home/HomeScreen";
import BallScreen from "../screens/Ball/BallScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import GameScreen from "../screens/Game/GameScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MatchResultsScreen, {screenOptions as MatchResultsScreenOptions} from "../screens/MatchResultsScreen/MatchResultsScreen";


import theme from "../constants/theme";

const defaultNavOptions = {

};


const HomeStackNavigator = createStackNavigator();
export const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <HomeStackNavigator.Screen
                name={'Home'}
                component={HomeScreen}
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
                component={ChatScreen}
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
                component={BallScreen}
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
                component={GameScreen}
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
                component={ProfileScreen}
                // options={}
            />
            <ProfileStackNavigator.Screen
                name={'MatchResults'}
                component={MatchResultsScreen}
                options={MatchResultsScreenOptions}
            />
        </ProfileStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator();

export const DrivingTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({color}) => {
                    if (route.name === 'Home') {
                        return <MaterialCommunityIcons name="home" size={24} color={color} />
                    } else if (route.name === 'Chat') {
                        return <Ionicons name="chatbubbles-outline" size={20} color={color} />
                    } else if (route.name === 'Ball') {
                        return <Ionicons name="ios-football" size={24} color={color} />
                    } else if (route.name === 'Game') {
                        return <MaterialCommunityIcons name="gamepad-variant" size={24} color={color} />
                    } else if (route.name === 'Profile') {
                        return <FontAwesome5 name="user" size={20} color={color} />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.colors.green,
                inactiveTintColor: theme.colors.lightGray,
                showLabel: false,
            }}
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
