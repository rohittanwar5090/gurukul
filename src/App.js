import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inspiration from "./components/About/Inspiration";
import MissionRows from "./components/About/MissionRows";
import PartnerInSuccess from "./components/About/PartnerInSuccess";
import IndividualCourses from "./components/Courses/IndividualCourses";
import VicePresident from "./components/About/VicePresident";
import RaggingFreeCampus from "./components/Footer/RaggingFreeCampus";
import ClassRoom from "./components/Footer/ClassRoom";
import Sports from "./components/Footer/Sports";
import Cafeteria from "./components/Footer/Cafeteria";
import Lab from "./components/Footer/Lab";
import Library from "./components/Footer/Library";
// import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route  path="/about/Inspiration">
          <Inspiration />
        </Route>
        <Route  path="/about/MissionRows">
          <MissionRows />
        </Route>
        <Route  path="/about/PartnerInSuccess">
          <PartnerInSuccess />
        </Route>
        <Route  path="/courses/:c">
          <IndividualCourses />
        </Route>
        <Route  path="/vp">
          <VicePresident />
        </Route>
        <Route  path="/ragging">
          <RaggingFreeCampus />
        </Route>
        <Route  path="/Classroom">
          <ClassRoom />
        </Route>
        <Route  path="/Lab">
          <Lab />
        </Route>       
        <Route  path="/Library">
          <Library />
        </Route>
        <Route  path="/Cafeteria">
          <Cafeteria />
        </Route>
        <Route  path="/Sports">
          <Sports />
        </Route>
        
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
