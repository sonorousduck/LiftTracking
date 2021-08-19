import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { LineChart,} from "react-native-chart-kit";
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const WorkoutGraph = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2
          }
        ],
        legend: ["Rainy Days"]
      };
      const screenWidth = Dimensions.get("window").width;

      const chartConfig= {
        backgroundGradientFrom: "#32507A",
        backgroundGradientTo: "#32747a",
        
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 32,
            
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }


    return (
        <View style={{width: screenWidth * 0.8, marginLeft: 'auto', marginRight: 'auto', marginTop: 16}}>
          <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <Button mode="text" color="#32507A" style={{flex: 1, alignContent: 'center'}} onPress={() => console.log("Left")}>  <Icon name='arrow-left-bold-outline' size={25} /></Button>
            <Text style={{flex: 2, alignContent: 'center', fontSize: 16, color: "#32507A", textAlignVertical: 'center', textAlign: 'center'}}> Bicep Curls </Text>
            <Button mode="text" color="#32507A" style={{flex: 1, alignContent: 'center'}} onPress={() => console.log("Right")}> <Icon name='arrow-right-bold-outline' size={25}/> </Button>
          </View>

          <LineChart
              data={data}
              width={screenWidth * 0.8}
              height={220}
              chartConfig={chartConfig}
          /> 

        </View>
    );
};

export default WorkoutGraph;
