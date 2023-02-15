import React, { Component } from 'react'


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