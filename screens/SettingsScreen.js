import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Alert,
} from 'react-native';
import { Button } from 'react-native-paper';
import NameAndLogo from '../components/NameAndLogo';


const SettingsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <NameAndLogo/>
            <Button mode="outlined" onPress={() => console.log("Pressed")} style={styles.logoutButton}> <EntypoIcons name="log-out" size={20} style={{color: '#32507A'}}/> <Text style={{color: '#32507A'}}> LogOut </Text> </Button>
        </SafeAreaView>
    )
}

const styles = {
    logoutButton: {
        width: '90%',
        height: 25, 
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        flex: 1,
        marginBottom: 36,
    },
}


export default SettingsScreen;