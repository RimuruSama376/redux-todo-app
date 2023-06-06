import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header";
import { View, StyleSheet, Dimensions } from "react-native";
import TaskDetails from "./components/TaskDetails";

export default function App() {
  const screenHeight = Dimensions.get("window").height;

  return (
    <Provider store={store}>
      <View style={[styles.container, { flex: 1 }]}>
        <Header />
        <TaskDetails />
        <TaskList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    // marginHorizontal: 20,
    // borderWidth: 1,
    // borderColor: "black",
    flex: 1,
  },
});
