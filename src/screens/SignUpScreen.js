import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { SocialSignInButtons } from "../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigation = useNavigation();
  const onRegisterPressed = async (data) => {
    const { username, password, email, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate("ConfirmEmail", { username });
    } catch (error) {
      Alert.alert("Oops", error.message);
    }
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use Pressed");
  };

  const onPrivacyPolicyPressed = () => {};

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="name"
          placeholder="Name"
          control={control}
          rules={{
            required: "Name is required",
            minLength: { value: 3, message: "User is too short" },
            maxLength: { value: 20, message: "User is too long" },
          }}
        />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: { value: 3, message: "Username is too short" },
            maxLength: { value: 20, message: "Username is too long" },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
          placeholder="Email"
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Password is too short" },
          }}
        />
        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry
          rules={{
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

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
