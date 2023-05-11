import React from "react";
import '../stylesheets/AvailableJobs.css'
import SideNav from "../components/SideNav";
import JobDescription from "../components/JobDescription";
import JobFilter from "../components/JobFilter";
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faSearch
} from "@fortawesome/free-solid-svg-icons";
class AvailableJobs extends React.Component {
    render() {

        return (
            <div className="aj">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <TopNav />
                        <div className="profile-heading">
                            <h3>Available Jobs</h3>
                            <h5>
                                &nbsp;List of guidelines to be followed during the placement
                                season of 2023-2024 batch.
                            </h5>
                        </div>
                        <div className="job-page-container">
                        <div className="job-page">
                            <div className="search-box">
                                <input placeholder="&nbsp; Search for a Job by Company name, skill or keyword"></input>
                                <button>Search <FontAwesomeIcon id = "search-icon" icon = {faSearch}></FontAwesomeIcon></button>
                            </div>
                            <div className="job-container">
                                <JobDescription/>
                                <JobDescription/>
                                <JobDescription/>
                                <JobDescription/>
                                <JobDescription/>
                            </div>
                        </div>
                        <div className="some-box">
                            <div className="job-filters">
                                <JobFilter/>
                            </div>
                            <div className="job-metrics">
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AvailableJobs;