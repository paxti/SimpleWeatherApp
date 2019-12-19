import React from 'react';
import {ImageBackground, View, ViewStyle, StyleSheet} from 'react-native';

interface CityBackgroundProps {
  image: string;
  childern?: React.ReactNode;
}

type Style = {
  container: ViewStyle;
  image: ViewStyle;
};

const CityBackground: React.FC<CityBackgroundProps> = ({children, image}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: image,
          cache: 'only-if-cached',
        }}
        resizeMethod="auto"
        style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default CityBackground;

const styles: Style = StyleSheet.create({
  container: {
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
