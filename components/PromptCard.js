import React, { useContext, useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

promptArray = [
  "Spot someone standing on one leg",
  "Find someone whos phone is vibrating",
  "Spot someone in red clothes",
  "Find someone who is wearing glasses",
  "Spot a person with a hat",
  "Look for someone reading a book",
  "Find someone who is drinking coffee",
  "Spot a person who is running",
  "Look for someone who is laughing",
  "Find a person with a blue shirt",
  "Spot someone who is on the phone",
  "Look for a person with a dog",
  "Find someone who is wearing headphones",
  "Spot a person who is eating",
  "Look for someone who is wearing a watch",
  "Find a person with a backpack",
  "Spot someone who is taking a selfie",
  "Look for a person who is wearing sandals",
  "Find someone who is riding a bike",
  "Spot a person who is wearing a tie",
  "Look for someone who is carrying a grocery bag",
  "Find a person who is wearing a mask",
  "Spot someone who is smoking",
  "Look for a person who is wearing a scarf",
  "Find someone who is taking a photo",
  "Spot a person who is wearing a jacket",
  "Look for someone who is carrying an umbrella",
  "Find a person who is wearing boots",
  "Spot someone who is yawning",
  "Stand on one leg",
  "Blink your eyes",
  "Wiggle your fingers",
  "Tap your foot",
  "Stretch your arms",
  "Rotate your wrists",
  "Roll your shoulders",
  "Sway from side to side",
  "Take a deep breath",
  "Close your eyes briefly",
  "Shake out your hands",
  "Touch your toes",
  "Flex your muscles",
  "Hum a tune",
  "Scrunch your face",
  "Wiggle your ears",
  "Clench and unclench your fists",
  "Stand up straight",
  "Tilt your head",
  "Blink rapidly",
  "Wiggle your toes",
  "Roll your ankles",
  "Shake your head",
  "Smile widely",
  "Stand on your tiptoes",
  "Stretch your legs",
  "Rub your palms together",
  "Shake your arms",
  "Nod your head",
  "Take a deep exhale",
  "Raise one eyebrow",
  "Shrug your shoulders",
  "Twist your torso",
  "Wink with one eye",
  "Point to the ceiling",
  "Wave your hand",
  "Cross your arms",
  "Make a peace sign",
  "Clap your hands",
  "Make a thumbs-up gesture",
  "Scratch your head",
  "Pat your stomach",
  "Touch your nose",
  "Spin in a circle",
  "Blow a kiss",
  "Give a high five",
  "Make a heart shape with your hands",
  "Pretend to juggle",
  "Do a little dance",
  "Pretend to conduct an orchestra",
  "Play the Air guitar",
  "Make a funny face",
  "Pantomime opening a door",
  "Pretend to type on a keyboard",
  "Do jazz hands",
  "Pretend to catch something",
  "Do a victory pose",
  "Pretend to take a selfie",
  "Give a thumbs-down gesture",
];

//prompt = promptArray[Math.floor(Math.random()*promptArray.length)]

const PromptCard = () => {
  const [prompt, setPrompt] = useState(
    promptArray[Math.floor(Math.random() * promptArray.length)]
  );

  const handlePress = () => {
    setPrompt(promptArray[Math.floor(Math.random() * promptArray.length)]);
  };
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.bodyText}>{prompt}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    top: 150,
    height: "auto",
    borderRadius: 10,
    borderColor: "rgba(255,0,255,50)",
    borderStyle: "solid",
    borderWidth: 4,
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: "rgba(255,0,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  bodyText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
});

export default PromptCard;
