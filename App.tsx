/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNav from './src/navigation/StackNav';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.baseContainer}>
        <StackNav />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: 'rgba(242,242,242,1)',
  },
  header: {
    flex: 2,
    // backgroundColor: 'lightblue',
  },
  body: {
    flex: 9,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});

export default App;
