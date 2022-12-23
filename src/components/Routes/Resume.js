import React from "react";
import '../stylesheets/Resume.css'
import SideNav from "../commons/SideNav";
class Resume extends React.Component {
    render() {
        return (
            <div className="r">
                <div className="main-section">
                    <div className="left-section">
                        <SideNav />
                    </div>
                    <div className="right-section">
                        <h1>Resume</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Resume;