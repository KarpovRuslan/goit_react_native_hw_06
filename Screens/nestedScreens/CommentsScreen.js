import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Comments Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default CommentsScreen;
