import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function TaskDetails({
  title = "NFT Web APP Prototype",
  description = "Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..",
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Title</Text>
      <Text style={styles.taskTitleText}>{title}</Text>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.avatarRow}>
        <Image
          source={require("../assets/avatarGroup.png")}
          style={styles.avatarImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    // width: 70,
    // height: 20,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#ABB6C8",
    marginBottom: 10,
  },
  taskTitleText: {
    width: 234,
    height: 30,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
    color: "#1D2939",
    marginBottom: 16,
  },
  descriptionText: {
    // width: 342,
    height: 84,
    fontStyle: "normal",
    fontWeight: "500",
    marginBottom: 15,
    fontSize: 14,
    lineHeight: 20,
    color: "#111322",
  },
  avatarImage: {
    // width: 30,
    // height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
});

export default TaskDetails;
