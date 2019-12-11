import React from 'react';
import {View, Text, TextStyle, ViewStyle, StyleSheet} from 'react-native';

export interface DayWeatherType {
  day: string;
  icon: string;
  minTemperature: string;
  maxTemperature: string;
}

export interface DayWeatherProps {
  data: DayWeatherType;
}

type Style = {
  container: ViewStyle;
  column: ViewStyle;
  tempratureContainer: ViewStyle;
  title: TextStyle;
  icon: TextStyle;
};

const DayWeather: React.FC<DayWeatherProps> = ({
  data: {day, icon, minTemperature, maxTemperature},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text>{day}</Text>
      </View>
      <View style={styles.column}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.tempratureContainer}>
        <Text style={styles.column}>{minTemperature}</Text>
        <Text style={styles.column}>{maxTemperature}</Text>
      </View>
    </View>
  );
};

export default DayWeather;

const styles: Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  tempratureContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  title: {},
  icon: {},
});
