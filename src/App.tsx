import React from 'react';
import logo from './logo.svg';
import './App.css';
import collegeBasketballData from './CollegeBasketballTeams.json';

const basketballData = collegeBasketballData.teams;

function SiteIntro() {
  return (
    <div>
      <h1>
        This site shows information about all the colleges in NCAA Basketball.
      </h1>
      <h2>
        You can look through the school name, mascot name, and location of all
        the teams.
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SiteIntro />
    </div>
  );
}

export default App;
