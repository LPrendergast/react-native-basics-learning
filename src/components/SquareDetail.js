import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SquareDetail = props => {
  const [colour, setColour] = useState(155);

  const handleColour = colour => {
    if (colour >= 255 || colour <= 0) return;
    props.handleColour(colour);
  };
  return (
    <View style={styles.viewStyle}>
      <Text>{props.colour}</Text>
      <Button
        title={"Increase " + props.colour}
        onPress={() => {
          setColour(colour + 15);
          handleColour(colour);
        }}
      ></Button>
      <Button
        title={"Decrease " + props.colour}
        onPress={() => {
          setColour(colour - 15);
          handleColour(colour);
        }}
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

export default SquareDetail;
