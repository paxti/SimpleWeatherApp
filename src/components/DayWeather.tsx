import React from 'react';
import {View, Text} from 'react-native';

export interface DayWeatherType {
  day: string;
  icon: string;
  minTemperature: string;
  maxTemperature: string;
}

export interface DayWeatherProps {
  data: DayWeatherType;
}

const DayWeather: React.FC<DayWeatherProps> = ({
  data: {day, icon, minTemperature, maxTemperature},
}) => {
  return (
    <View>
      <View>
        <Text>{day}</Text>
      </View>
      <View>
        <Text>{icon}</Text>
      </View>
      <View>
        <Text>{minTemperature}</Text>
        <Text>{maxTemperature}</Text>
      </View>
    </View>
  );
};

export default DayWeather;
