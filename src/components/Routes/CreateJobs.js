import React from "react";
import '../stylesheets/AdminProfile.css'
import AdminSideNav from "../components/AdminSideNav";
import TopNav from "../components/TopNav";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
class CreateJobs extends React.Component {
    render() {
        return (
            <div className="r">
                <div className="main-section">
                    <div className="left-section">
                        <AdminSideNav />
                    </div>
                    <div className="right-section">
                        <TopNav />
                        <div className="profile-container">
                            <div className="profile-heading">
                                <h3>Create Jobs</h3>
                                <h5>&nbsp;Connect, Engage, and Empower: Streamline Job Posting for Maximum Impact</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default CreateJobs;