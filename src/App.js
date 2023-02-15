import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
   render(){
    return(
      <div>
        {/* Passing child component into parent component */}
        <Navbar category ="general" sports = "sports" technology = "technology"/>
        <News pageSize={8} />        
      </div>
    )
   }
}

