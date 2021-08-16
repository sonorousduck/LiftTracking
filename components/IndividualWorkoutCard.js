import * as React from 'react';
import { Card, List, Title } from 'react-native-paper';
import MyCheckbox from './Checkbox';
import { View } from 'react-native';
import WorkoutComponent from './WorkoutComponent';

const IndividualWorkoutCard = () => {
    const [checked, setChecked ] = React.useState(false);

    return (
        <Card elevation={100} style={{marginHorizontal: 32, marginVertical: 8, borderRadius: 16}} theme={theme}>
            <Card.Title title="Workout Name" right={MyCheckbox} titleStyle={{color: '#32507A'}}/>
            <Card.Content>
                <View style={{height: 1, backgroundColor: 'black', marginRight: 50}} />
                <List.Section>
                    <WorkoutComponent />
                    <WorkoutComponent />
                </List.Section>
            </Card.Content>
        </Card>
    );

};

export default IndividualWorkoutCard;


const theme = {
    colors: {
        primary: '#32507A',
        accent: '#AAAAAD',
        text: '#32507A',
        
    }

}
