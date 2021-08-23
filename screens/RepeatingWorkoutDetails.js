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
            <View style={{borderWidth: 1, borderRadius: 25, borderColor: '#C8C8CF', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}>
            <Picker
                style={{color: '#32507A'}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                    <Picker.Item label="Arms" value="arms" />
                    <Picker.Item label="Chest" value="chest" />
                    <Picker.Item label="Shoulders" value="shoulders" />
                    <Picker.Item label="Back" value="back" />
                    <Picker.Item label="Legs" value="legs" />
                    <Picker.Item label="Abs" value="abs" />
                    <Picker.Item label="Cardio" value="cardio" />
                </Picker>
            </View>

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