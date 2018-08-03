// Components/Home.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { onSignOut } from '../Tools/Authentication'

export default ({ navigation }) => (
  <View style={styles.main_container}>
  <View style={styles.header}>
  <Text style={styles.text_header}>Accueil</Text>
  </View>
  <View style={styles.spacer}/>
  <TouchableOpacity style={styles.tile_container} onPress={() => {onSignOut().then(() => navigation.navigate("SignedOut"))}}>
  <Text style={styles.text_home}>Déconnexion</Text>
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
  spacer: {
    flex: 1.25
  },
  ender: {
    flex:0.25
  },
  tile_container: {
    flex: 1.5,
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
