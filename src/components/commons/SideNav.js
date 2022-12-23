import React from "react";
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
                        <li>Profile</li>
                        <li>Application Dashboard</li>
                        <li>Available Jobs</li>
                        <li>Resume</li>
                        <li>Placement Policy</li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default SideNav;