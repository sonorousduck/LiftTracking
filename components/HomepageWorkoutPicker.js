import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";


const HomepageWorkoutPicker = () => {
    const [selectedLanguage, setSelectedLanguage ] = React.useState();
    return (
        <View style={{borderWidth: 1, borderRadius: 25, borderColor: '#C8C8CF', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}>
            <Picker
                style={{color: '#32507A'}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                    <Picker.Item label="Arms" value="arms" />
                    <Picker.Item label="Chest" value="chest" />
                    <Picker.Item label="Shoulders" value="shoulders" />
                    <Picker.Item label="Back" value="back" />
                    <Picker.Item label="Legs" value="legs" />
                    <Picker.Item label="Abs" value="abs" />
                    <Picker.Item label="??" value="??" />
                </Picker>
            </View>
    );
};

export default HomepageWorkoutPicker;
