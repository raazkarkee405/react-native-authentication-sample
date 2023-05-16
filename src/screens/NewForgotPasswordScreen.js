import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSumitPressed = () => {
    navigation.navigate("Home");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: "Code is required" }}
        />

        <CustomInput
          placeholder="Enter your new password"
          name="name"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSumitPressed)} />

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

export default NewForgotPasswordScreen;
