import { Provider } from "react-redux";
import { store } from "./store/store";
import Dummy from "./components/Dummy";

export default function App() {
  return (
    <Provider store={store}>
      <Dummy></Dummy>
    </Provider>
  );
}
