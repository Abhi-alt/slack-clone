import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Login from "./components/Login";
import { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  // const [user, setUser] = useState(null);
  // setUser(props.userInfo);
  return (
    <>
      <Router>
        {!props.userInfo ? (
          <Login />
        ) : (
          <>
            <Header />
            <Switch>
              <div className="app">
                <SideBar />
                <Route path="/chat/room/:roomId">
                  <Body />
                </Route>
              </div>
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user,
  };
};
export default connect(mapStateToProps)(App);
