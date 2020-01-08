import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <ImageDetail title="Forest" image={require("../../assets/forest.jpg")}  score='4'/>
      <ImageDetail title="Beach" image={require("../../assets/beach.jpg")}  score='1'/>
      <ImageDetail
        title="Mountain"
        image={require("../../assets/mountain.jpg")} score='8'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: "center"
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default ImageScreen;
