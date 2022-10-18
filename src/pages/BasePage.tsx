import React from 'react';
import {StyleSheet, View} from 'react-native';

export const BasePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.body} />
      <View style={styles.footer} />
    </View>
  );
};

export default BasePage;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
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
