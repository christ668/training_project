import React from "react";
import logo from "./logo.svg";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./App.css";
import Header from "./header.js";
import Profile from "./profile.js";
import NextMeetup from "./nextMeetup.js";
import AboutMeetup from "./aboutMeetup.js";
import Member from "./member.js";
import PastMeet from "./passMeet.js";
import Copyright from "./copyright.js";



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Profile/>
        <NextMeetup />
        <AboutMeetup />
        <Member />
        <PastMeet/>
        <Copyright/>
      </div>
    );
  }
}

export default App;
