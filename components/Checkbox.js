import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const MyCheckbox = () => {
    const [checked, setChecked ] = React.useState(false);

    return (
        <Checkbox.Item status={checked ? 'checked' : 'unchecked'} color="green" onPress={() => { setChecked(!checked); }}/>
    );

};

export default MyCheckbox;
