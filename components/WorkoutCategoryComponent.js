import * as React from 'react';
import { Card, List, Title } from 'react-native-paper';
import {View, Text } from 'react-native';

const WorkoutCategoryComponent = (params) => {
    return (
        <Card style={{marginHorizontal: 16, marginVertical: 8, borderRadius: 32, backgroundColor: params.color ? params.color: 'white'}}>
            <Card.Content style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontVariant: ['small-caps'], textShadowRadius: 1, color: params.color ? 'white' : '#AAAAAD', textAlign: 'left', fontWeight: 'bold', marginLeft: 16,}}>Arms</Text>
            </Card.Content>
        </Card>
    );
};

export default WorkoutCategoryComponent