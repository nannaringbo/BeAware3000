import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import CameraBackground from "../components/CameraBackground";
import PromptCard from "../components/PromptCard";
import Timer from "../components/Timer";
import VibrationTrigger from "../components/VibrationTrigger";
import ParticipantsCounter from "../components/ParticipantsCounter";

export default function HomeScreen({ navigation }) {
  function handleNavigation() {
    navigation.navigate("IntroScreen");
    // update navigation for this button
  }

  return (
    <View style={styles.container}>
      <View>
        <CameraBackground />
      </View>

      <View style={styles.btn}>
        <VibrationTrigger></VibrationTrigger>
      </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.counterContainer}>
        <ParticipantsCounter />
      </View>
      <View style={styles.promptCardContainer}>
        <PromptCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  promptCardContainer: {
    position: "absolute",
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  timerContainer: {
    position: "absolute",
    width: "97%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  btn: {
    flexDirection: "row",
    rowGap: 10,
    position: "absolute",
    marginLeft: 20,
    backgroundColor: "green",
    backgroundColor: "blue",
  },
  counterContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
