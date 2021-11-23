import { Route, Switch } from "react-router";
import "./App.scss";
import Sidebar from "./components/Sidebar/sidebar";

// Components
import Home from "./pages/home";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div><Switch>
        <Route path="/" component={Home}></Route>
      </Switch> </div>
    </div>
  );
}

export default App;
