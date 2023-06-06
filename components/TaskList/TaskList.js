import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import TaskCard from "./TaskCard";
import AddTaskCard from "./AddTaskCard";

export default function Dummy() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Task Title</Text>
        <Image
          source={require("../../assets/deleteIcon.png")}
          style={styles.avatarImage}
        />
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </ScrollView>
      </View>
      <View style={styles.addTaskView}>
        <AddTaskCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 16,
  },
  innerContainer: {
    // flex: 1,
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  scrollViewContainer: {
    flex: 5,
    // borderWidth: 1,
    height: "48%",
    marginBottom: 15,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#ABB6C8",
    marginBottom: 10,
  },
  avatarImage: {
    marginRight: 8,
  },
  addTaskView: {
    flex: 1,
    // borderWidth: 1,
    marginBottom: 10,
  },
});
