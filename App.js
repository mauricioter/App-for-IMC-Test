import React from 'react';
import { StyleSheet, Text, View, Keyboard, Pressable } from 'react-native';
import Title from './src/componets/title';
import Main from './src/componets/title/Main';


export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Title />
      <Main />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
