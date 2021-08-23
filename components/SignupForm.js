import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import { color } from "react-native-elements/dist/helpers";
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';




const SignupForm = () => {
    const [username, onChangeUsername] = React.useState("")
    const [email, onEmailChangeText] = React.useState("")
    const [password, onChangePassword] = React.useState("")
    const [confirmPassword, onChangeConfirmPassword] = React.useState("")


    function createAccount(email, password, username) {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                firestore()
                    .collection('users')
                    .doc(username)
                    .add({
                        email: "Ryan Anderson",
                        age: 23,
                    })

                console.log("Success!")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log(error);
                    <ErrorLogin error='That email address is already in use!' />
                    setVisible(!visible);

                }
            
                if (error.code === 'auth/invalid-email') {
                    console.log(error);
                    <ErrorLogin error='That email address is invalid!' />
                    setVisible(!visible);

                }

                console.log(error);
                <ErrorLogin error={error} visible={true}/>
                setVisible(!visible);

              });
    }


    return (
    <SafeAreaView style={{alignSelf: 'center'}}>
        <TextInput
            style={styles.usernameInput}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
        />

        <TextInput
            style={styles.emailInput}
            onChangeText={onEmailChangeText}
            value={email}
            placeholder="Email"
        />

        <TextInput
            style={styles.passwordInput}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
        />

        <TextInput
            style={styles.confirmPassword}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
            placeholder="Confirm Password"
        />

        <View style={{alignSelf: 'center'}}>
            <Button mode="outlined" style={styles.buttonStyle} 
            onPress={() => {
                    if (password !== confirmPassword) {
                        console.error("Passwords do not match");
                    } else {
                        createAccount(email, password, username);
                    }
                }
                }><Text style={{color: '#38557D'}}>Create Account</Text></Button>
        </View>

        <View style={{flexDirection: 'row', marginTop: 16}}>
                <View style={{backgroundColor: '#AAAAAD', height: 1, flex: 1, alignSelf: 'center'}}></View>
                    <Text style={{color: '#AAAAAD'}}> OR </Text> 
                <View style={{backgroundColor: '#AAAAAD', height: 1, flex: 1, alignSelf: 'center'}}></View>
        </View>

    </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    usernameInput: {
        height: 50,
        width: Dimensions.get("window").width * 0.8,
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#C8C8CF',
        borderRadius: 8,
        padding: 10,
    },

    emailInput: {
        height: 50,
        width: Dimensions.get("window").width * 0.8,
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#C8C8CF',
        borderRadius: 8,
        padding: 10,
    },

    passwordInput: {
        height: 50,
        width: Dimensions.get("window").width * 0.8,
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#C8C8CF',
        borderRadius: 8,
        padding: 10,
    },

    confirmPassword: {
        height: 50,
        width: Dimensions.get("window").width * 0.8,
        marginTop: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#C8C8CF',
        borderRadius: 8,
        padding: 10,
    },
    buttonStyle: {
        width: Dimensions.get("window").width * 0.8,
    },

});


export default SignupForm;