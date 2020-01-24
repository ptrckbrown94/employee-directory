import React, { Component } from 'react';
import './App.css';
//  import Header from "./Components/"
import List from "./Components/List"
import API from "./utils/api.js"

class App extends Component() {
  state={
    users:[]

  }

  componentDisMount(){
  
    // call the api for get the users
    const getusers = API.search()
    this.setState({users: getusers})
  }



 render(){
  return (
    <div className="App">
    
     <List 
     users={this.state.users}
     />

    </div>
  )
}
}

export default App;
