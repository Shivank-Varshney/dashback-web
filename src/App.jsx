import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Webinar from "./pages/Webinar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/webinar" component={Webinar} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;