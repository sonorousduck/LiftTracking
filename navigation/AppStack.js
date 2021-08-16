import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function bottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
            activeColor="#32507A"
            inactiveColor="#877D80"
            barStyle= {{ backgroundColor: "#C8C8CF"}}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home", tabBarIcon: ({ color }) => ( <Icon name="ios-home-outline" size={25} color={color}/>) }} />
            <Tab.Screen name="Workout" component={WorkoutScreen} options={{ tabBarLabel: "Workout", tabBarIcon: ({ color }) => ( <CommunityIcons name="dumbbell" size={25} color={color}/>) }} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ tabBarLabel: "Schedule", tabBarIcon: ({ color }) => ( <EntypoIcons name="calendar" size={25} color={color}/>) }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: "Settings", tabBarIcon: ({ color }) => ( <Icon name="ios-settings-outline" size={25} color={color}/>) }} />
        </Tab.Navigator>
    )
}



const mainStack = ({navigation}) => (

    <Stack.Navigator
        screenOptions = {{
            headerShown: false
        }}
    >
        <Stack.Screen
            name="Navigator"
            component = {bottomTabs}
        />
        
    </Stack.Navigator>
)





export default mainStack;