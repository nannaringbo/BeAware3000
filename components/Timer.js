import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba( 255, 165, 0, 0.9)",
    padding: 10,
    position: "absolute",
    flex: 1,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgb( 255, 165, 0)",
    borderStyle: "solid",
    borderWidth: 2,
  },
  timerText: {
    fontSize: 48,
    color: "white",
  },
});

export default Timer;
