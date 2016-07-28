import React, {Component} from 'react';

var element1 = {
  display: "inline-block",
  marginRight: "25px",
 };
var element2 = {
    display: "inline-block",
    float: "right",
 };

export default class CharItem extends Component {
  render() {
    // var url = `http://www.imdb.com/title/${this.props.id}`
    //  save for later: <a href={url}>
    return (
      <div>

        <h2>CharItem</h2>
        <span style={element1}>  {this.props.name}   </span>
        <span style={element2}>{this.props.desc}   </span>
      </div>
    );
  }
}
