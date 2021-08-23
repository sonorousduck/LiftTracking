import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


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
import GettingTestData from '../components/GettingTestData';
import SettingTestData from '../components/SettingTestData';
import CreateDefaultWorkout from '../components/CreateDefaultWorkout';


const SettingsScreen = ({navigation}) => {
    const [user, setUser] = useState('');

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <NameAndLogo/>
            <View style={styles.container}>
            <View style={styles.bar}></View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('CreateDefaultWorkout')}}
            >
                <Text> Add Default Workouts </Text>
                </TouchableOpacity>
                <View style={styles.bar}></View>
            </View>

            <SettingTestData />
            <GettingTestData />
            <Button mode="outlined" onPress={() => auth().signOut()} style={styles.logoutButton}> <EntypoIcons name="log-out" size={20} style={{color: '#32507A'}}/> <Text style={{color: '#32507A'}}> Logout </Text> </Button>
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