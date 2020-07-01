import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

export default function CallHelp() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Do you want to call 999?",
      "Ugent help is needed.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Call GP practice",
      "Query about patient state.",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title={"Call 999"} onPress={createTwoButtonAlert} />

      <Button title={"Call your GP practice"} onPress={createThreeButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});