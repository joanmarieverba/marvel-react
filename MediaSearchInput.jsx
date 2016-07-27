import React, {Component} from 'react';


export default class MediaSearchInput extends Component {
  render() {
    return (
      <label> Superhero Search:
      <input type="text" placeholder="Enter search term" onChange={this.props.onSearchInputChange}/>
      </label>
    );
  }
};
