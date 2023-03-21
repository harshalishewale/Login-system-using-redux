import { Provider } from "react-redux";
import Login from "./components/Login";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
     <Login/>
     </Provider>
    </div>
  );
}

export default App;
