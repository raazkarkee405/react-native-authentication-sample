import { StyleSheet, Text, View } from "react-native";
import {
  ConfirmEmailScreen,
  ForgotPasswordScreen,
  SignInScreen,
  SignUpScreen,
  NewForgotPasswordScreen,
} from "./src/screens";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NewForgotPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
