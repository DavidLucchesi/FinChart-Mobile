// Components/SignIn.js
// Connexion

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { onSignIn } from '../Tools/Authentication'

export default ({ navigation }) => (
  <View style={styles.main_container}>
  <View style={styles.header}>
  <Text>Connexion</Text>
  </View>
  <TouchableOpacity style={styles.tile_container} onPress={() => {onSignIn().then(() => navigation.navigate("SignedIn"))}}>
  <Text style={styles.text_home}>Connexion</Text>
  </TouchableOpacity>
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
    flex:0.5
  },
  tile_container: {
    flex: 3,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#df8931',
    borderRadius:20,
    borderWidth: 3,
    borderColor: '#aa530e'
  },
  text_home:{
    color:'#f3eded',
    fontSize: 26,
    fontWeight: "bold"
  }
})
