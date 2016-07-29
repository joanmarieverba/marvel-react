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

// export default class NameImgDesc extends Component {
//   render() {
//     return (
//       <div style={titleStyle}>
//         <h3>Name, Image, Description</h3>
//
//         <CharItem />
//
//       </div>
//     );
//   }
// }


export default class NameImgDesc extends Component {
  render() {
    return (
      <div style={titleStyle}>
        {this.props.media.filter((character) => {
          var databaseName = character.name.toString();
          var inputName = this.props.charName.toString();
          if (databaseName === inputName) {return true;}else{return false;}
        }).map((character) => {
            return (
              <CharItem name={character.name} img={character.thumbnail.path}  desc={character.description} key={character.id} />
            )
          })}
      </div>
    );
  }
}
