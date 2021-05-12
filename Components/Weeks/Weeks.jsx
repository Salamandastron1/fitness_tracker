import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const weeklyPercentages = [
  [65, 75, 85],
  [70, 80, 90],
  [75, 85, 95]
]
const createWeek = (percent, oneRepMax, day) => {
  const weight = ((oneRepMax * percent / 100 - 45) / 2).toFixed(2)
  return <Text key={day}>Day {day + 1} @:{percent}% Weight per side: {weight}</Text>
}

export default ({ oneRepMax }) => {
  if (oneRepMax <= 0) {
    return <Text>Please enter a one rep maximum</Text>
  }
  const weeksJSX = weeklyPercentages.map((week, index) => {
    return (
      <View key={index.toString()} style={styles.week}>
        <Text>Week {index + 1}</Text>
        {
          week.map((percent, index) => {
            return createWeek(percent, oneRepMax, index)
          })
        }
      </View>
    )
  })

  return weeksJSX
}

const styles = StyleSheet.create({
  week: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
