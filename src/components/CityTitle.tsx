import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';

export interface CityTitleProps {
  title: string;
}

type Style = {
  container: ViewStyle;
};

const CityTitle: React.FC<CityTitleProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default CityTitle;

const styles: Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
