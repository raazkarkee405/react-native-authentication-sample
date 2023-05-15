import { StyleSheet, Text, View } from "react-native";
import { ConfirmEmailScreen, SignInScreen, SignUpScreen } from "./src/screens";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ConfirmEmailScreen />
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
