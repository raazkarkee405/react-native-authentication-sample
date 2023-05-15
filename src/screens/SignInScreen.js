import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FlagNepal } from "../../assets";
import { CustomButton, CustomInput } from "../components";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign In Pressed");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Pressed");
  };

  const onSignInFacebook = () => {};
  const onSignInGoogle = () => {};
  const onSignInApple = () => {};
  const onSignUpPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={FlagNepal}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

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
