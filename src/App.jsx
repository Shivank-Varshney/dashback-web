import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import DownloadApp from "./pages/DownloadApp";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/downloadapp" component={DownloadApp} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;