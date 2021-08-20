import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Logo from 'react-native-vector-icons/FontAwesome5'
import SignupForm from '../components/SignupForm';




const SignupScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{marginTop: '33.333%'}}>
                <Logo name='dumbbell' size={32} style={{textAlign: 'center'}}></Logo>
                <Text style={{textAlign: 'center', fontSize: 24, color: '#38557D', fontWeight: 'bold'}}> Lift Tracking </Text>
            </View>

            <SignupForm />


            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 16}}>
                <Text style={{textAlign: 'center'}} onPress={() => navigation.goBack()}> Already have an account? </Text> 
                <Text style={{color: '#0000EE'}} onPress={() => navigation.goBack()}>Sign In </Text> 
            </View>
            
        </SafeAreaView>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({


})