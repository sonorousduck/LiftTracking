import * as React from 'react';
import {View, Text } from 'react-native';

const NameAndLogo = () => {
    return (
        <View style={{flex: 5, flexDirection: 'row', marginTop: 16, justifyContent: 'flex-start'}}>
            <View style={{borderWidth: 1, borderRadius: 100, width: 50, height: 50, justifyContent: 'center', borderColor: '#AAAAAD'}}>
                <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#32507A'}}> RA </Text>
            </View>
            <View style={{height: 50, justifyContent: 'center', marginLeft: 16}}>
                <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold', fontSize: 24, color: '#32507A'}}> Ryan Anderson </Text>
            </View>
        </View>
    );
};

export default NameAndLogo
{/* <View style={{borderRadius: '100', justifyContent: 'center', backgroundColor: 'black'}}> </View> */}
