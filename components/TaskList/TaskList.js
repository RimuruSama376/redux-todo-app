import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TaskCard from "./TaskCard";
import AddTaskCard from "./AddTaskCard";
import { useSelector, useDispatch } from "react-redux";
import { removeAllTasks } from "../../store/todo";

export default function TaskList() {
  const tasks = useSelector((state) => state.currentTasks.tasks);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Task Title</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeAllTasks());
          }}
        >
          <Image
            source={require("../../assets/deleteIcon.png")}
            style={styles.avatarImage}
          />
        </TouchableOpacity>
      </View>
      {tasks.length !== 0 && (
        <FlatList
          style={styles.flatList}
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <TaskCard task={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
