import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const mainStack = ({navigation}) => (

    <Stack.Navigator
        screenOptions = {{
            headerShown: false
        }}
    >
        <Stack.Screen
            name="Login"
            component = {LoginScreen}
        />
        <Stack.Screen
            name="Signup"
            component = {SignupScreen}
        />
        
    </Stack.Navigator>
)





export default mainStack;