import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class MediaSubmitButton extends Component {
  render() {
    return (
     <input type="button" onClick={this.props.onSubmitButtonClick} value="Search" />
    );
  }
};
