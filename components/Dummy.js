import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeAllTasks } from "../store/todo";

export default function Dummy() {
  const counter = useSelector((state) => state.currentTasks.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button
        title="pressme"
        onPress={() => {
          dispatch(addTask());
        }}
      ></Button>
      <Button
        title="dont pressme"
        onPress={() => {
          dispatch(removeAllTasks());
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
