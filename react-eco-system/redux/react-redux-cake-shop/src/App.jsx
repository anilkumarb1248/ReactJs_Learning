import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/cake/CakeContainer";
import store from "./redux/store";
import HookCakeContainer from "./components/cake/HookCakeContainer";
import IceCreamContainer from "./components/icecream/IceCreamContainer";
import PayloadCakeContainer from "./components/cake/PayloadCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/user/UserContainer";
import LayoutContainer from "./components/layout/LayoutContainer";

function App() {
  return (
    <Provider store={store}>
      <h2>Cake Shop Application</h2>
      <CakeContainer />
      <HookCakeContainer />
      <PayloadCakeContainer />
      <IceCreamContainer />
      <ItemContainer cake />
      <ItemContainer />
      <UserContainer />
      <LayoutContainer />
    </Provider>
  );
}

export default App;
