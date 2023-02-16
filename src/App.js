import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


export default class App extends Component {
   render(){
    return(
      <div>
        {/* Passing child component into parent component */}
        <Navbar category ="general" sports = "sports" technology = "technology"/>
        <News pageSize={8} />        
      </div>

// Because Github doesn't support route if you open it outside github it works well I created  a single page applicatin using react and router -->


// <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             {/*<--In new feature of React router switch is replaced with element--> */}
//             <Route path='/home' element={<News key='general' pageSize={8}country='in' category='general' />}></Route>
//             {/* <Route path='/home' element={<News key='general' pageSize={8} category='general' />}></Route> */}
//             <Route path='/business' element={<News key='business' pageSize={8}country='in'  category='business' />}></Route>
//             <Route path='/entertainment' element={<News key='entertainment'country='in'  pageSize={8} category='entertainment' />}></Route>
//             <Route path='/health' element={<News key='health' pageSize={8} country='in' category='health' />}></Route>
//             <Route path='/science' element={<News key='science' pageSize={8} country='in' category='science' />}></Route>
//             <Route path='/sports' element={<News key='sports' pageSize={8} country='in'  category='sports' />}></Route>
//             <Route path='/technology' element={<News key='technology' country='us' pageSize={8} category='technology' />}></Route>
//           </Routes>
//         </Router>
//       </div>


    )
   }
}

