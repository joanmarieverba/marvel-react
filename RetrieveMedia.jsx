import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NameImgDesc from './NameImgDesc.jsx';
import md5 from "md5";

function fetchJSON(url) {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  });
}

//calculates hash, calculates url, and then gets the json from the url
function marvelFactory(config) {
  return function(path) {
    var timestamp = new Date().getTime();
    var hash = md5(timestamp + config.privateKey + config.publicKey);
    var url = config.hostname + '/v' + config.version + '/public' + path + '?limit=100&apikey=' + config.publicKey + '&ts=' + timestamp + '&hash=' + hash;
    console.log(url);

    return fetchJSON(url);
  }
}

// Get an instance of the marvel api
var marvel = marvelFactory({
  hostname: 'http://gateway.marvel.com',
  publicKey: '11baddac3441be34e5ab00c3395622ae',
  privateKey: 'c0409eaf5b34286b2722603cd90db4cb71cf200c',
  version: '1'
});



export default class RetrieveMedia extends Component {
  //constructor only gets executed once
    constructor(props) {  //allows you to set the initial state of the component
      super(props);
      this.state={
        media: []    //this is the initial state, needs to be empty at first
      }
    }

    getOneMedia(charName){  //put it in a function so that it only gets called once

      marvel('/characters').then((response) => {
        if (response && response.status === "Ok") {

          this.setState({media: response.data.results});
        } else if (response && response.Response === "False") {
          this.setState({media: "random number"});
        } else {
          console.error('Unknown error.');
        }
      });
    }
    //if the query changed, call getOneMedia
    componentWillReceiveProps (nextProps){
    if (this.props.charName !== nextProps.charName){
      this.getOneMedia(nextProps.charName);
    }
    }


  render() {
    return (
      <div>
      <NameImgDesc media={this.state.media} charName={this.props.charName}/>
      </div>
    )}

  };

//  react calls render over and over again by the brower when it refreshes
  // render() {
  //   if (this.state.media !== "random number") {
  //   return (
  //     <div>
  //       <NameImgDesc media={this.state.media}/>
  //     </div>
  //   );
  //   } else {
  //         return (
  //     <div>
  //       No results found
  //     </div>
  //   );
  //   }
  // }
  // };
