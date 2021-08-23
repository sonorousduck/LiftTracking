import React, {useEffect, useState, } from 'react';
import { ActivityIndicator, List } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { StyleSheet, TouchableOpacity } from 'react-native'

import {
    Text, View,
} from 'react-native';

const CreateDefaultWorkout = ({navigation}) => {
  const [loading, setLoading] = useState(true)
  const [testData, setTestData] = useState()


    return (
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

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },

    button: {
        padding: 10,

    },

    bar: {
        backgroundColor: 'black',
        height: 1,
    },

})

export default CreateDefaultWorkout;