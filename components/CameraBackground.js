import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { position } from "stylis";

const CameraBackground = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.cameraContainer}></View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "transparent",
    margin: "50%",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    zIndex: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    zIndex: 5,
  },
});

export default CameraBackground;
