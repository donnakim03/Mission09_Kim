/**
 * Donna Kim
 * Section 03
 * Description: This React project takes JSON data about NCAA basketball teams and displays
 * their information.
 */
import React from 'react';
import './App.css';
import collegeBasketballData from './CollegeBasketballTeams.json';

/**
 * Props that layouts data information for component
 */
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

/**
 * save json data to make accessible
 */
const basketballData = collegeBasketballData.teams;

/**
 * Function that holds introduction to the site use.
 */
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

/**
 * Component to create cards for the information about each team we want to display
 */
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card">
        <h4>School: {oneTeam.school}</h4>
        <h4>Mascot: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

/**
 * Function to list the cards created
 */
function TeamList() {
  return (
    <div>
      {basketballData.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SiteIntro />
      <TeamList />
    </div>
  );
}

export default App;
