import React, {Component} from 'react';

var inputBox = {
  paddingTop: "50px",
  textAlign: "center",
  display: "inline-block",
  // margin: "0 auto",
}

export default class MediaSearchInput extends Component {
  render() {
    return (
      <label  style={inputBox}> Superhero Search:
      <input  type="text" placeholder="Enter search term" onChange={this.props.onSearchInputChange}/>
      </label>
    );
  }
};
