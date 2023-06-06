import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import TaskCard from "./TaskCard";
import AddTaskCard from "./AddTaskCard";

export default function TaskList() {
  const tasks = [{}]; // replace with your data

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Task Title</Text>
        <Image
          source={require("../../assets/deleteIcon.png")}
          style={styles.avatarImage}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={tasks}
        renderItem={({ item }) => <TaskCard />}
        keyExtractor={(item, index) => index.toString()}
      />
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
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#ABB6C8",
  },
  avatarImage: {
    marginRight: 8,
  },
  addTaskView: {
    // borderWidth: 1,
    marginBottom: 10,
  },
  flatList: {
    // borderWidth: 1,
    flexGrow: 0,
    flexShrink: 1,
    marginBottom: 15,
  },
});
