import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
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
      <ScrollView></ScrollView>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <AddTaskCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
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
  avatarImage: {
    // width: 30,
    // height: 30,
    marginRight: 8,
  },
});
