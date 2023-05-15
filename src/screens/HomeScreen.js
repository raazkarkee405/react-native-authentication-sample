import { View, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "red",
          alignSelf: "center",
        }}
      >
        Home Home, Sweet home
      </Text>
    </View>
  );
};

export default HomeScreen;
