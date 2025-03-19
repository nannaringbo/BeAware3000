import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import PromptCard from "./PromptCard";

const VibrationTrigger = ({ prompt }) => {
  if (prompt == promptArray[1]) {
    Vibration.vibrate(10 * 200, true);
  }
  if (prompt == promptArray[2]) {
    console.log("Something");
  } else console.log("Other prompt");
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    top: 100,
    left: "25%",
    height: "30%",
    backgroundColor: "rgba(255,0,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default VibrationTrigger;
