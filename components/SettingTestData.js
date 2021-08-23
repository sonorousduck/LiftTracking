import React, {useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'

import {
    Text,
} from 'react-native';

const SettingTestData = (params) => {
  const [visible, setVisible] = React.useState(true);
  const [loading, setLoading] = useState(true)
  const [testData, setTestData] = useState()

    // useEffect(() => {
    //     const fetchQuery = async () => {
    //         const testDataFetch = await firestore()
    //             .collection('Users')
    //             .doc('DefaultWorkouts')
    //             .collection(firebase.auth().currentUser.uid)
    //             .add({
    //                 title: 'Autopopulated',
    //                 reps: [],
    //             });
    //         if (testDataFetch) {
    //             setTestData(testDataFetch);
    //             setLoading(false);
    //         } else {
    //             console.log("Something went wrong");
    //         }
    //     }
    //     fetchQuery();  
    // }, ['input'])


    if (loading) {
        return (
            <ActivityIndicator/>
        );
    } else {

  
    return (        
        <Text> H {firebase.auth().currentUser.uid}</Text>
        );
    };
}

export default SettingTestData;