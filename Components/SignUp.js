// Components/SignUp.js
// Inscription

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ navigation }) => (
  <View style={styles.main_container}>
  <View style={styles.header}>
  <Text>Inscription</Text>
  </View>
  <View style={styles.ender}/>
  </View>
)

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: '#f3eded'
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ender: {
    flex:3.5
  }
})
