/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import Routes from './navigation/Routes';


const Main: () => Node = () => {
    return (
        <Routes></Routes>
    )
}

export default Main;


AppRegistry.registerComponent(appName, () => Main);
