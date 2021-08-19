import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Alert,
    Colors,
} from 'react-native';
import MyCheckbox from '../components/Checkbox';
import IndividualWorkoutCard from '../components/IndividualWorkoutCard';
import MyFAB from '../components/MyFAB';



const WorkoutScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: "white"}}>
             <ScrollView
                contentInsetAdjustmentBehavior="automatic" >
                <View style={{flexDirection: 'row'}}>
                  <Text style={{flex: 1, padding: 8, fontSize: 16, marginTop: 8, color: '#32507A', fontWeight: 'bold' }}> Today's Workout</Text> 
                  <MyCheckbox style={{flex: 1}} />
                </View>
                <View style={{marginHorizontal: 16, height: 1, backgroundColor: 'black'}} />

              <IndividualWorkoutCard />
              <IndividualWorkoutCard />
              <IndividualWorkoutCard />
              <IndividualWorkoutCard />
              
            </ScrollView>
            <MyFAB/>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default WorkoutScreen;