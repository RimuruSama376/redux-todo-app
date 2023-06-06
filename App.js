import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header";
import { View, StyleSheet } from "react-native";
import TaskDetails from "./components/TaskDetails";
import useCustomFonts from "./fonts";

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
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
    flex: 1,
  },
});
