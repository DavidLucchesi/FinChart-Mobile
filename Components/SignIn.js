// Components/SignIn.js
// Connexion

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from '../Tools/Authentication'

export default ({ navigation }) => (
  <View style={styles.main_container}>
  <View style={styles.header}>
  <Text style={styles.text_header}>Connexion</Text>
  </View>
  <View style={styles.form_container}>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder=" Adresse email..." />
      <FormLabel>Mot de passe</FormLabel>
      <FormInput secureTextEntry placeholder=" Mot de passe..." />
  </View>
  <View style={styles.ender}/>
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
    flex:0.25
  },
  form_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
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
