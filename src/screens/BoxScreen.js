import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200
  },
  textOneStyle: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start"
  },
  textTwoStyle: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-end",
    position: "absolute"
  },
  textThreeStyle: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "red",
    left: 100,
    right: 100
  }
});

export default BoxScreen;
