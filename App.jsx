import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RetrieveMedia from './RetrieveMedia.jsx';
import MediaSearchInput from './MediaSearchInput.jsx';
import MediaSubmitButton from './MediaSubmitButton.jsx';
  /**
   * A stateful component to store our app
   */
   var pageTitleStyle = {
       backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/starry-sky-389083_1280.jpg")',
       position: "fixed",
       WebkitTransition: 'all',
       msTransition: 'all'
    };

  var topBanner = {
      width : "100%",
      position: "fixed",
      fontFamily: 'Bangers',
      fontSize: "36px",
      top: "0",
      left : "0",
      border: "3px solid #73AD21",
      backgroundColor: "red",
      WebkitTransition: 'all',
      msTransition: 'all'
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
          {/* <span style={topBanner}>Marvel Character Readout</span> */}
          <MediaSearchInput onSearchInputChange={this.handleSearchInputChange.bind(this)}/>
          <MediaSubmitButton onSubmitButtonClick={this.handleSubmitButtonClick.bind(this)}/>
          <RetrieveMedia charName={this.state.charName}/>
        </div>
      );
    }
  };
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );