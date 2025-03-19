import React, { useEffect } from "react";
import { View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Location from "expo-location";

export default function Notification() {
  useEffect(() => {
    const sendNotification = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;

      // Replace these with the coordinates of your desired area
      let desiredLatitude = 55.659774173889495;
      let desiredLongitude = 12.590968725932369;

      // Replace this with the desired radius (in meters)
      let radius = 100;

      // Convert degrees to radians
      let lat1 = (latitude * Math.PI) / 180;
      let lon1 = (longitude * Math.PI) / 180;
      let lat2 = (desiredLatitude * Math.PI) / 180;
      let lon2 = (desiredLongitude * Math.PI) / 180;

      // Calculate the differences
      let dlat = lat2 - lat1;
      let dlon = lon2 - lon1;

      // Calculate the Haversine distance
      let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
      let distance = 2 * 6371 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km is the earth's radius

      // Convert distance to meters and check if it's within the radius
      if (distance * 1000 <= radius) {
        const content = {
          title: "Oh No! Seems like your Metro is delayed.",
          body: "Don't worry. We'll help you pass the time!",
        };

        Notifications.scheduleNotificationAsync({ content, trigger: null });
      }
    };

    sendNotification();
  });

  return <View></View>;
}
