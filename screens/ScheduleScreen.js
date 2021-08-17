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
import WorkoutCategoryComponent from '../components/WorkoutCategoryComponent';


const ScheduleScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.scrollview]}> 
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
                <ScheduleCardComponents/>
            </ScrollView>

            <View style={{marginTop: 8, marginHorizontal: 16, height: 1, backgroundColor: '#707070'}} />

            <ScrollView height={400} showsVerticalScrollIndicator={false} style={{marginTop: 16, marginHorizontal: 8,}}>
                <WorkoutCategoryComponent color={styles.active.color}/>
                <WorkoutCategoryComponent color={styles.assigned.color}/>
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />
                <WorkoutCategoryComponent />



            </ScrollView>
            
        </SafeAreaView>
    )
}

export default ScheduleScreen;

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: 'transparent'
    },

    active: {
        color: '#38557D'
    },

    assigned: {
        color: '#C8C8CF'
    }


})