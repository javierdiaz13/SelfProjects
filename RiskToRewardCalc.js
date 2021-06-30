import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity
} from "react-native";
import RtoRInput from "./components/RtoRInput";

export default function ColorForm() {
  const [inputValue1, setValue1] = useState("");
  const [inputValue2, setValue2] = useState("");
  const [inputValue3, setValue3] = useState("");
  const [inputValue4, setValue4] = useState("");
  const [inputValue5, setValue5] = useState("");
  const input = useRef();
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Risk to Reward Calculator</Text>

      <View style={styles.inputs}>
        <Text style={styles.labels}>Account</Text>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue1}
          onChangeText={text => setValue1(text)}
          placeholder='Account'
        />
      </View>

      <View style={styles.inputs}>
        <Text style={styles.labels}>Lot Size</Text>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue2}
          onChangeText={text => setValue2(text)}
          placeholder='Lot Size'
        />
      </View>

      <View style={styles.inputs}>
        <Text style={styles.labels}>Entry Point</Text>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue3}
          onChangeText={text => setValue3(text)}
          placeholder='Entry Point'
        />
      </View>

      <View style={styles.inputs}>
        <Text style={styles.labels}>Stop Loss</Text>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue4}
          onChangeText={text => setValue4(text)}
          placeholder='Stop Loss'
        />
      </View>

      <View style={styles.inputs}>
        <Text style={styles.labels}>Take Profit</Text>
        <TextInput
          ref={input}
          style={styles.txtInput}
          value={inputValue5}
          onChangeText={text => setValue5(text)}
          placeholder='Take Profit'
        />
      </View>

      <TouchableOpacity style={styles.button} 
          onPress={() => {
          input.current.blur();
          setValue1("");setValue2("");setValue3("");setValue4("");setValue5("");
          }}>
        <Text style={styles.buttonTitle}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    height: 10000,
    alignContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    margin: 7,
    textAlign: 'center',
    marginTop: 50,
  },
 button: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 50,
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  buttonTitle: {
    color: '#FFFFFF',
    padding: 5,
    fontSize: 30,
    textAlign: 'center',
  },
  txtInput: {
    width: 220,
    height: 40,
    flexBasis: 'auto',
    borderWidth: 3,
    fontSize: 15,
    marginLeft: 10,
    marginTop: 25,
    marginRight: 30,
    borderRadius: 30,
    padding: 11,
    backgroundColor: '#FFFFFF',
    order: 2,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  labels: {
    color: '#FFFFFF',
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 23,
    order: 1,
    width: 140,
  }
});
