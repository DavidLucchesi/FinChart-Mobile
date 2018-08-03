// Components/Settings.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { onSignOut } from '../Tools/Authentication'

export default ({ navigation }) => (
  <View style={styles.main_container}>
  <View style={styles.header}>
  <Text style={styles.text_header}>Paramètres</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_header: {
    fontSize: 32,
    paddingBottom: 8,
    fontWeight: "bold",
    color: "#000000"
  },
  ender: {
    flex: 3
  }
})
