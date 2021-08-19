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
import HomepageWorkoutPicker from '../components/HomepageWorkoutPicker';
import WorkoutGraph from '../components/WorkoutGraph';
import WorkoutHomepage from '../components/WorkoutHomepage';


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <HomepageWorkoutPicker style={{flex: 1}} />
            <WorkoutGraph style={{flex: 3}}/>

            <View>
                <Text style={{color: '#32507A', fontWeight: 'bold', fontSize: 16, marginLeft: 24, marginTop: 24}}>
                    This Week's Workouts
                </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <WorkoutHomepage title="Chest" date="19" day="Mon"/>
                <WorkoutHomepage title="Arms" date="20" day="Tues"/>
                <WorkoutHomepage title="Shoulder And Back" date="21" day="Wed"/>
                <WorkoutHomepage title="Abs" date="22" day="Thurs"/>
                <WorkoutHomepage title="Legs" date="23" day="Fri"/>
                <WorkoutHomepage title="??" date="24" day="Sat"/>
                <WorkoutHomepage title="Light Walk" date="25" day="Sun"/>


            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;