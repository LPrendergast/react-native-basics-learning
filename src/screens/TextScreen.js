import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Enter password: </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your name here..."
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length >= 5 ? (
        <Text style={styles.text}>Valid length password.</Text>
      ) : (
        <Text style={styles.text}>
          Password must be longer than 5 characters.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    marginHorizontal: 30
  },
  inputStyle: {
    marginVertical: 15,
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
