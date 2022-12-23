import React from "react";
import '../stylesheets/AvailableJobs.css'
import SideNav from "../commons/SideNav";
class AvailableJobs extends React.Component {
    render() {
        return (
            <div className="aj">
            <div className="main-section">
                <div className="left-section">
                    <SideNav/>
                </div>
                <div className="right-section">
                    <h1>Available Jobs</h1>
                </div>
            </div>
        </div>
        );
    }
}
export default AvailableJobs;