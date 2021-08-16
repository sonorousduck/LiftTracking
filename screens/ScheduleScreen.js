import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Alert,
} from 'react-native';
import ScheduleCardComponents from '../components/ScheduleCardComponent';


const ScheduleScreen = ({navigation}) => {
    return (
        <SafeAreaView backgroundColor="white">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
            </ScrollView>

            <View style={{marginTop: 8, marginHorizontal: 16, height: 1, backgroundColor: '#707070'}} />

            <ScrollView height={60}>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>

            </ScrollView>
            
        </SafeAreaView>
    )
}

export default ScheduleScreen;