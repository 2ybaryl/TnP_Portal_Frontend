import React from "react";
import '../stylesheets/AvailableJobs.css'
import SideNav from "../commons/SideNav";
import JobDescription from "../commons/JobDescription";
class AvailableJobs extends React.Component {
    render() {
       
        return (
            <div className="aj">
            <div className="main-section">
                <div className="left-section">
                    <SideNav/>
                </div>
                <div className="right-section">
                    <JobDescription/>
                    <JobDescription/>
                    <JobDescription/>
                    <JobDescription/>
                    <JobDescription/>
                    <JobDescription/>
                </div>
            </div>
        </div>
        );
    }
}
export default AvailableJobs;