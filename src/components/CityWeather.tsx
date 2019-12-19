import React from 'react';
import {Text, View, ViewStyle, StyleSheet} from 'react-native';

interface CityWeatherProps {
  temperature: number;
}

type Style = {
  container: ViewStyle;
};

const CityWeather: React.FC<CityWeatherProps> = ({temperature}) => {
  return (
    <View style={styles.container}>
      <Text>{temperature}°</Text>
    </View>
  );
};

export default CityWeather;

const styles: Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
