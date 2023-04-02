import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  //const displayName = useSelector(selectDisplayName);

  const logOutHandle = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Sign Out please" onPress={logOutHandle} />
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

export default ProfileScreen;
