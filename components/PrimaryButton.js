import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const PrimaryButton = ({ title, onPress, color }) => {
  return (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    width: "40%",
    height: "auto",
    position: "absolute",
    backgroundColor: "#0041C2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#0000A0",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
});

export default PrimaryButton;
