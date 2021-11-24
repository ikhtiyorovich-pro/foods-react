import { Route, Switch } from "react-router";
import "./App.scss";
import Sidebar from "./components/Sidebar/sidebar";

// Components
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Settings from "./pages/settings/settings";

// Images
// import notFoundImg from "./assets/images/not-found-img.png";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Route>
          <Route path="/" component={Home}></Route>
            {/* <div className="not-page-wrapper">
              <img src={notFoundImg} alt="there is a img" />
              <h2 className="not-page__heading">Page Not Found...</h2>
            </div> */}
          </Route>
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
