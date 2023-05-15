import { StyleSheet, Text, View } from "react-native";
import { SignInScreen } from "./src/screens";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
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
