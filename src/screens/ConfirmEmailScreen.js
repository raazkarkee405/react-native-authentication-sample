import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { SocialSignInButtons } from "../components/SocialSignInButtons";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("Sign In Pressed");
  };

  const onResendPressed = () => {};
  const onSignInPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmailScreen;
