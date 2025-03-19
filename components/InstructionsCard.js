import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InstructionsCard = () => {
  function moverOrObserver() {
    var mover = " Mover.";
    var observer = " Observer.";

    var thisUser = Math.random() < 0.5 ? mover : observer;

    return thisUser;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oh no! Another Metro delay! </Text>
      <Text style={styles.bodyText}>
        We know how inconvenient this is for you, so we've created a way to help
        you pass the time and maybe even have some fun! Instead of seeing this
        delay as a hassle, we'll invite you to make it into an opportunity.
        Let's make the most of this unexpected pause together!
      </Text>
      <Text style={styles.bodyText}>
        {"\n"}
        {/* <Text style={{ fontWeight: "bold", color: "#0000A0" }}>
          {moverOrObserver()}
        </Text>{" "} */}
        You and your fellow commuters will receive a series of prompts, which
        you should perform to the best of your abilities. Pay attention to every
        detail, movement, reaction and take care of your surroundings. Let's get
        started!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    position: "absolute",
    backgroundColor: "rgba( 255, 165, 0, 0.9)",
    padding: 20,
    marginTop: 100,
    borderRadius: 10,
    borderColor: "rgb( 255, 100, 0)",
    borderStyle: "solid",
    borderWidth: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "rgb( 255, 100, 0)",
  },
  bodyText: {
    fontSize: 20,
    textAlign: "justify",
    color: "white",
  },
});

export default InstructionsCard;
