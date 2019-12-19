/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import CityOverview from './containers/CityOverview';
import CityHeader from './containers/CityHeader';

const App = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <CityHeader />
        <CityOverview />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
  },
});

export default App;
