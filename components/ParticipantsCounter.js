import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const ParticipantsCounter = () => {
  const [count, setCount] = useState(7);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    incrementCount();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Participants: {count}</Text>
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
});

export default ParticipantsCounter;
