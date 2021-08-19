import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import {
    View,
    Text,
} from 'react-native';

const WorkoutHomepage = (params) => {

    return (
        <View style={{borderColor: '#C8C8CF', borderRadius: 16, borderWidth: 1, flex: 1, marginBottom: 16, marginTop: 32, marginHorizontal: 16,}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{flex: 4, padding: 8, fontSize: 16, marginTop: 8, color: '#32507A', fontWeight: 'bold' }}> {params.title} </Text>
                <View style={{flex: 1, paddingHorizontal: 32}}></View>
                <View style={{flexDirection: 'column', flex: 1, padding: 8, borderColor: '#C8C8CF', borderRadius: 16, borderWidth: 1, marginRight: 8, marginTop: 8}}>
                    <Text style={{textAlign: 'center', color: '#32507A', fontWeight: 'bold'}}>{params.day}</Text>
                    <Text style={{textAlign: 'center', color: '#32507A', fontWeight: 'bold'}}>{params.date}</Text>
                </View>
            </View>
        </View>


    );

};

export default WorkoutHomepage;
