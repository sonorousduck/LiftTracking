import * as React from 'react';
import { Card, List, Title } from 'react-native-paper';
import {View, Text } from 'react-native';

const ScheduleCardComponents = () => {
    return (
        <Card elevation={100} style={{marginHorizontal: 16, marginVertical: 16, borderRadius: 32, width: 128}}>
            <Card.Content style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 32, fontVariant: ['small-caps'], color: '#38557D', justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', marginBottom: -8}}>Mon</Text>
                <Text style={{fontSize: 32, fontVariant: ['small-caps'], color: '#38557D', justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', marginBottom: 8}}>19</Text>
                <Text style={{fontSize: 16, fontVariant: ['small-caps'], textShadowRadius: 1, color: '#AAAAAD', justifyContent: 'center', textAlign: 'center', fontWeight: 'normal'}}>Arms</Text>
            </Card.Content>
        </Card>
    );
};

export default ScheduleCardComponents