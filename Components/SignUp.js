// Components/SignUp.js
// Inscription

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput } from "react-native-elements"

export default ({ navigation }) => (
  <View style={styles.main_container}>
  <View style={styles.header}>
  <Text style={styles.text_header}>Inscription</Text>
  </View>
  <View style={styles.form_container}>
  <FormLabel>Email</FormLabel>
      <FormInput placeholder=" Adresse email..." />
      <FormLabel>Mot de passe</FormLabel>
      <FormInput secureTextEntry placeholder=" Mot de passe..." />
      <FormLabel>Confirmation du mot de passe</FormLabel>
      <FormInput secureTextEntry placeholder=" Confirmation du mot de passe..." />
  </View>
  <View style={styles.ender}/>
  <TouchableOpacity style={styles.tile_container} onPress={() => {navigation.navigate("Login")}}>
    <Text style={styles.text_home}>S'inscrire</Text>
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
  form_container:{
    flex:1.75,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  ender: {
    flex:0.25
  },
  tile_container: {
    flex: 0.75,
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
