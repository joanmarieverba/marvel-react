import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RetrieveMedia from './RetrieveMedia.jsx';
import MediaSearchInput from './MediaSearchInput.jsx';
import MediaSubmitButton from './MediaSubmitButton.jsx';
import globalStyles from "./assets/styles/global.css";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Welcome from './Welcome.jsx';
import NoMatch from './NoMatch.jsx';
  /**
   * A stateful component to store our app
   */
   var pageTitleStyle = {
       backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/starry-sky-389083_1280.jpg")',
      //  position: "fixed",
       width: "100%",
       minHeight: "100%",
       WebkitTransition: 'all',
       msTransition: 'all'
    };

  var topBanner = {
      width : "100%",
      position: "fixed",
      textAlign: "center",
      fontFamily: 'Bangers',
      fontSize: "36px",
      top: "0",
      left : "0",
      border: "3px solid #73AD21",
      backgroundColor: "red",
      WebkitTransition: 'all',
      msTransition: 'all'
    }

  var centerButtons = {
      paddingTop: "15px",
      margin: "0 auto",
      display: "block",
      width: "310px",
  }


  class App extends Component {
    constructor(props) {   //this handles the intital state of the query
      super(props);
      this.state = {
        charName: "",
        searchCharName:''
      }
    }
    handleSubmitButtonClick(e) {   //method
           //go get more data e.target.value
           //set state, use bind below to insure we get the right value for this
    //set state to new query
      this.setState({charName: this.state.searchCharName});
    }
    handleSearchInputChange(e){
      //we have a value
      console.log(e.target.value);
      //call another function which actually changes the state being sent into retriever
      this.setState({searchCharName: e.target.value});
    }
    render() {
      return (
        <div style={pageTitleStyle}>
          <span style={topBanner}>Marvel Character Readout</span>
          <div style={centerButtons}>
            <MediaSearchInput onSearchInputChange={this.handleSearchInputChange.bind(this)}/>
            <MediaSubmitButton onSubmitButtonClick={this.handleSubmitButtonClick.bind(this)}/>
          </div>
          <RetrieveMedia charName={this.state.charName}/>
        </div>
      );
    }
  };
  ReactDOM.render(
    <Router history={browserHistory}>

      <Route path="/" component={Welcome} />
      <Route path="main" component={App} />
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  );
