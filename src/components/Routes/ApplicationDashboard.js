import React from "react";
import '../stylesheets/ApplicationDashboard.css'
import '../commons/SideNav'
import SideNav from "../commons/SideNav";
class ApplicationDashboard extends React.Component {
    render() {
        return (
            <div className="ad">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav/>
                    </div>
                    <div className="right-section">
                        <h1>Application Dashboard</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default ApplicationDashboard;