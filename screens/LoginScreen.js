import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Logo from 'react-native-vector-icons/FontAwesome5'
import LoginForm from '../components/LoginForm';



const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{alignSelf: 'center'}}>
            <View style={{marginTop: '50%'}}>
                <Logo name='dumbbell' size={32} style={{textAlign: 'center'}}></Logo>
                <Text style={{textAlign: 'center', fontSize: 24, color: '#38557D', fontWeight: 'bold'}}> Lift Tracking </Text>
            </View>
            
            <LoginForm />

            <View style={{flexDirection: 'row', marginTop: 16}}>
                <View style={{backgroundColor: '#AAAAAD', height: 1, flex: 1, alignSelf: 'center'}}></View>
                    <Text style={{color: '#AAAAAD'}}> OR </Text> 
                <View style={{backgroundColor: '#AAAAAD', height: 1, flex: 1, alignSelf: 'center'}}></View>
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 16}}>
                <Text style={{textAlign: 'center'}} onPress={() => navigation.navigate('Signup')}> Don't have an account? </Text> 
                <Text style={{color: '#0000EE'}} onPress={() => navigation.navigate('Signup')}>Sign up </Text> 
            </View>
            
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({


})