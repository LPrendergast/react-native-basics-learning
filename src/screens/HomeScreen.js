import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Images Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Colour")}
        title="Go to Colour Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Demo"
      />
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
    flex: 1
  }
});

export default HomeScreen;
