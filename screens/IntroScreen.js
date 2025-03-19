import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  Vibration,
} from "react-native";
import React from "react";
import CameraBackground from "../components/CameraBackground";
import PrimaryButton from "../components/PrimaryButton";
import PromptCard from "../components/PromptCard";
import InstructionsCard from "../components/InstructionsCard";
import Notification from "../components/Notification";

export default function IntroScreen({ navigation }) {
  function handleNavigation() {
    navigation.navigate("BeAware3000");
  }

  return (
    <View style={styles.container}>
      <View>
        <CameraBackground />
      </View>
      <Notification />
      <View style={styles.instructionsContainer}>
        <InstructionsCard />
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Go!" onPress={handleNavigation} />
        </View>
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
  instructionsContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  buttonContainer: {
    position: "absolute",
    width: "100%",
    height: "45%",
    marginTop: "70%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
