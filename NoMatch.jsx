import React, { Component } from 'react';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>Doh!</h1>
        <div>We couldn't find what you were looking for. You probably want to <a href="/">start over</a>.</div>
      </div>
    );
  }
}
