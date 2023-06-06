import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header";
import { View, StyleSheet } from "react-native";
import TaskDetails from "./components/TaskDetails";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Header />
        <TaskDetails />
        <TaskList />
      </View>
    </Provider>
  );
}
