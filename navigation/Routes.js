import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';



import AppStack from './AppStack';
import AuthStack from './AuthStack';


const Routes = () => {
    const [initializing, setInializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInializing(false);
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    );
};

export default Routes;