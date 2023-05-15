import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { SocialSignInButtons } from "../components/SocialSignInButtons";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onRegisterPressed = () => {
    console.warn("Sign In Pressed");
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use Pressed");
  };

  const onPrivacyPolicyPressed = () => {};

  const onSignInPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign In"
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

export default SignUpScreen;