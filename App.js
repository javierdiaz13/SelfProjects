import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
  } 
  from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Service</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Forex Trading Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>HFX Trading Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Crypto Trading Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Risk to Reward Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#000000",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 50,
    margin: 10,
  },
  buttonTitle: {
    color: '#FFFFFF',
    padding: 5,
    fontSize: 25,
    justifyContent: "space-around",
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default App;