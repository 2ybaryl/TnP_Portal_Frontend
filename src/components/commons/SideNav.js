import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import '../stylesheets/SideNav.css'

class SideNav extends React.Component {
    render() {
        return (
            <section id="SideNav">
                <div class = "logo">
                    <img src = "juetlogo.jpg" alt = "logo"/>
                    <h3>Training & <br/> Placement Portal</h3>
                </div>
                <hr/>
                <div className="navbar">
                    <ul>
                        <li> <Link to="/">Application Dashboard</Link></li>
                        <li> <Link to="/profile">Profile</Link></li>
                        <li> <Link to="/jobs">Available Jobs</Link></li>
                        <li> <Link to="/resume">Resume</Link></li>
                        <li> <Link to="/policy">Placement Policy</Link></li>
                        <li> <Link to="/">Log Out</Link></li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default SideNav;