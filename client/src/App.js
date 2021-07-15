import Home from "./pages/home/Home";
import TopBar from "./components/topnav/NavBar";
import Single from "./pages/edit/Edit";
import Write from "./pages/tweet/Tweet";
import Settings from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Weights from "./pages/weights/weights";
import Cardio from "./pages/cardio/cardio";
import WeightLoss from "./pages/weightloss/WeightLoss";
import WeightGain from "./pages/weightgain/WeightGain";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./styles.css"
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/WeightLoss">{<WeightLoss />}</Route>
        <Route path="/WeightGain">{<WeightGain/> }</Route>
        <Route path="/weights">{<Weights />}</Route>
        <Route path="/cardio">{<Cardio />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
