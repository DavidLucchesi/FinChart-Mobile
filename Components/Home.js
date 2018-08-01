// Components/Home.js

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native'

class Home extends React.Component {
  componentDidMount() {
       StatusBar.setHidden(true);
    }

  render() {
    return (
      <View style={styles.main_container}>
      <View style={styles.header}>
      <Text style={styles.text_header}>FinChart</Text>
      <Text style={styles.text_header_sub}>La DataViz appliquée à vos finances</Text>
      </View>
      <TouchableOpacity style={styles.tile_container} onPress={() => {}}>
      <Text style={styles.text_home}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tile_container} onPress={() => {}}>
      <Text style={styles.text_home}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tile_container} onPress={() => {}}>
      <Text style={styles.text_home}>Démonstration</Text>
      </TouchableOpacity>
      <View style={styles.ender}/>
      </View>
    )
  }
}

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
  text_header: {
    fontSize: 32,
    paddingBottom: 8,
    fontWeight: "bold",
    color: "#000000"
  },
  text_header_sub: {
    fontSize: 18,
    color: "#000000"
  },
  tile_container: {
    flex: 1,
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
  },
  ender: {
    flex:0.5
  }
})

export default Home
