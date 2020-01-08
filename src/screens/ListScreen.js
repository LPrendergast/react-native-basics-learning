import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
      age: 12
    },
    {
      name: "Friend #2",
      age: 22
    },
    {
      name: "Friend #3",
      age: 32
    },
    {
      name: "Friend #4",
      age: 42
    },
    {
      name: "Friend #5",
      age: 52
    },
    {
      name: "Friend #6",
      age: 62
    }
  ];
  return (
    <View style={styles.viewStyle}>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle} t>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      ></FlatList>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle} t>
              {item.name} - Age: {item.age},
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 30
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

export default ListScreen;
