import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FlagNepal } from "../../assets";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { SocialSignInButtons } from "../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const { height } = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();
  const onSignInPressed = (data) => {
    // validate user
    console.warn(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={FlagNepal}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: { value: 3, message: "Password is too short" },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    margin: 10,
  },
});

export default SignInScreen;
