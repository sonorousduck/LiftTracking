import React, {useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import {
    Text,
} from 'react-native';

const GettingTestData = (params) => {
  const [visible, setVisible] = React.useState(true);
  const [loading, setLoading] = useState(true)
  const [testData, setTestData] = useState()

    useEffect(() => {
        const fetchQuery = async () => {
            const testDataFetch = await firestore()
                .collection('test')
                .doc('testing')
                .get()

            if (testDataFetch) {
                
                setTestData(testDataFetch);
                setLoading(false);
            } else {
                console.log("Something went wrong");
            }
        }
        fetchQuery();  
    }, ['input'])


    if (loading) {
        return (
            <ActivityIndicator/>
        );
    } else {

  
    return (
        // <Text>Yeet</Text>
        <Text> Yeet {testData._data.blah.toString()} </Text>
    );
    };
}

export default GettingTestData;