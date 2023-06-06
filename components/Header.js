import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#111322",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default Header;
