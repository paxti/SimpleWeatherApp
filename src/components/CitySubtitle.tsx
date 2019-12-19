import React from 'react';
import {Text, View, ViewStyle, StyleSheet} from 'react-native';

interface CitySubtitleProps {
  day: string;
  conditions: string;
}

type Style = {
  container: ViewStyle;
};

const CitySubtitle: React.FC<CitySubtitleProps> = ({day, conditions}) => {
  return (
    <View style={styles.container}>
      <Text>
        {day}, {conditions}
      </Text>
    </View>
  );
};

export default CitySubtitle;

const styles: Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
