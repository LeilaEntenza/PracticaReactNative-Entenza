import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  let num = 1;
  return (
    
    <View style={styles.container}>
    <Button
      onPress={onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
