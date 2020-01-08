import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "Luke Prendergast";
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Getting started with React native!</Text>
      <Text style={styles.titleStyle}>Created by {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center"
  },
  titleStyle: {
    fontSize: 20
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default ComponentsScreen;
