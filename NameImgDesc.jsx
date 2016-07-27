import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CharItem from './CharItem.jsx';

var titleStyle = {
    border: "2px solid purple",
    // display: "inline-block",
    // marginTop: "50px",
    // marginLeft: '50px',
    // fontFamily: "Righteous",
    // fontSize: "14px",
    // padding: '15px',
    // WebkitTransition: 'all',
    // msTransition: 'all'
 };

export class NameImgDesc extends Component {
  render() {
    return (
      <div style={titleStyle}>
        <h3>Name, Image, Description</h3>

        <CharItem />
        
      </div>
    );
  }
}


// export class NameImgDesc extends Component {
//   render() {
//     return (
//       <div style={titleStyle}>
//         <h3>Name, Image, Description</h3>
//         {this.props.json.data.results.filter(function(character){
//           var name = character.name;
//             if (name.toLowerCase().indexOf(charName.toLowerCase()) > -1) {
//           return (
//             <CharItem name={character.name} img={character.thumbnail.path}  desc={character.description}/>
//           )}
//         })}
//         <CharItem />
//       </div>
//     );
//   }
// }
