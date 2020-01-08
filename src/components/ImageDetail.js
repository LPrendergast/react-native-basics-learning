import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = props => {
  return (
    <View style={styles.viewStyle}>
      <Image source={props.image} />
      <Text style={styles.textStyle}>
        Image of {props.title} - Score: {props.score}
      </Text>
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

export default ImageDetail;
