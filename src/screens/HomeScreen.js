import { View, Text } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";
const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };
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
      <Text
        onPress={signOut}
        style={{
          width: "100%",
          textAlign: "center",
          color: "red",
          marginTop: "auto",
          marginVertical: 20,
          fontSize: 20,
        }}
      >
        Sign Out
      </Text>
    </View>
  );
};

export default HomeScreen;
