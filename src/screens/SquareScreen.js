import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SquareDetail from "../components/SquareDetail";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRed = colour => {
    setRed(colour);
  };

  const handleGreen = colour => {
    setGreen(colour);
  };

  const handleBlue = colour => {
    setBlue(colour);
  };
  return (
    <View style={styles.viewStyle}>
      <SquareDetail colour="Red" handleColour={handleRed} red={red} />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      />
      <SquareDetail colour="Green" handleColour={handleGreen} green={green} />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      />
      <SquareDetail colour="Blue" handleColour={handleBlue} blue={blue} />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
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

export default SquareScreen;
