import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CharItem from './CharItem.jsx';

var titleStyle = {
    // display: "inline-block",
    // marginTop: "50px",
    // marginLeft: '50px',
    // fontFamily: "Righteous",
    // fontSize: "14px",
    // padding: '15px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };

 var errorStyle = {
   textAlign: "center",
   fontFamily: "Arial",
   fontSize: "24px",
   fontWeight: "bold",
}

export default class NameImgDesc extends Component {
  render() {
    var filteredCharacters = this.props.media.filter((character) => {
      var databaseName = character.name.toString();
      var inputName = this.props.charName.toString();
      if (databaseName.toLowerCase().indexOf(inputName.toLowerCase()) > -1) {return true;}else{return false;}
    });

    if (filteredCharacters.length > 0) {
        return (
          <div style={titleStyle}>
          {filteredCharacters.map((character) => {
            return (
                <CharItem name={character.name} img={character.thumbnail.path}  desc={character.description} key={character.id} />
            )})}
          </div>
          )
    } else if (this.props.media.length === 0){
        return (
          <div></div>
        )
    } else {
      return (
        <div style={errorStyle}>No matches found</div>
      )
    }
  }
}
