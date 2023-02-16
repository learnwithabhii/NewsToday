import React, { Component } from 'react'
//import { Link } from "react-router-dom";


//Structuring Navbar with the help of Bootstrap-->

//Using class base component
export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/Home">TodayNews</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link " aria-current="page" href="/Home">Home</a>

                                {/* Still working on adding sports and technology links because Github doesn't support router--> */}
                               

//These link will only work in React router because github doesn't fully support router so I commented them-->


//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/home">Home</Link></li>
//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
//                                 {/* <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/general">General</Link></li> */}
//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/health">Health</Link></li>
//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/technology">Technology</Link></li>
//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/science">Science</Link></li>
//                                 <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>

                                <a className="nav-link" href="#">Sports</a>
                                <a className="nav-link" href="#">Technology</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
