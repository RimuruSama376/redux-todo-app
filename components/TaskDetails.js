import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
function TaskDetails() {
  const activeTask = useSelector((state) => state.currentTasks.activeTask);
  if (!activeTask)
    return (
      <View style={styles.noTasksView}>
        <Text style={styles.title}>Add some Tasks to begin!</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Title</Text>
      <Text style={styles.taskTitleText}>{activeTask?.title}</Text>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.descriptionText}>{activeTask?.description}</Text>
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
  noTasksView: {
    alignItems: "center",
  },
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
    maxHeight: 84,
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
