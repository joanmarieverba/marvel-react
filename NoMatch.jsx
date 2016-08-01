import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";

var errorPage = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/tunnel-2.jpg")',
   //  position: "fixed",
    width: "100%",
    minHeight: "100%",
    textAlign: "center",
    fontFamily: 'Bangers',
    fontSize: "36px",
    color: "white",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

export default class NoMatch extends Component {
  render() {
    return (
      <div style={errorPage}>
        <h1>OOPS! You have accidentally landed in the SuperVillain lair.</h1>
        <div>You probably want to <a href="/">start over</a></div>
      </div>
    );
  }
}
