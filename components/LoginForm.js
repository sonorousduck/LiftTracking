import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import { color } from "react-native-elements/dist/helpers";
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import ErrorLogin from "./ErrorLogin";




const LoginForm = () => {
    const [email, onChangeEmail] = React.useState("")
    const [password, onChangePassword] = React.useState("")
    const [visible, setVisible] = React.useState(false);

    function login(email, password) {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
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
    <SafeAreaView>
        <TextInput
            style={styles.usernameInput}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Username"
        />

        <TextInput
            style={styles.passwordInput}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
        />


        <View style={{alignSelf: 'center'}}>
            <Button mode="outlined" style={styles.buttonStyle} onPress={() => login(email, password)}><Text style={{color: '#38557D'}}>Login</Text></Button>
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
    passwordInput: {
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


export default LoginForm;


