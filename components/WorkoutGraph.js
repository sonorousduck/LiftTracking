import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart,} from "react-native-chart-kit";



const WorkoutGraph = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };
      const screenWidth = Dimensions.get("window").width;

      const chartConfig= {
        backgroundGradientFrom: "#32507A",
        backgroundGradientTo: "#32747a",
        
        decimalPlaces: 0, // optional, defaults to 2dp
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
