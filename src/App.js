import React from "react";

import "./App.css";
import Header from "./Components/header.js";
import Profile from "./Components/profile.js";
import NextMeetup from "./Components/nextMeetup.js";
import AboutMeetup from "./Components/aboutMeetup.js";
import Member from "./Components/member.js";
import PastMeet from "./Components/passMeet.js";
import Copyright from "./Components/copyright.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <NextMeetup />
        <AboutMeetup />
        <Member />
        <PastMeet />
        <Copyright />
      </div>
    );
  }
}

export default App;
