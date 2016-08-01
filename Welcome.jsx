import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";

var startPage = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/office-730681_1280.jpg")',
   //  position: "fixed",
    width: "100%",
    minHeight: "100%",
    textAlign: "center",
    fontFamily: 'Bangers',
    fontSize: "36px",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

export default class Welcome extends Component {
  render() {
    return (
      <div style={startPage}>
        <h1>MARVEL SUPERHERO SECRET FILES</h1>
        <a href="main">Enter Here</a>
      </div>
    );
  }
}
