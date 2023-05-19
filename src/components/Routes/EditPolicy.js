import React from "react";
import '../stylesheets/AdminProfile.css'
import AdminSideNav from "../components/AdminSideNav";
import TopNav from "../components/TopNav";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
class EditPolicy extends React.Component {
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
                                <h3>Placement Policy</h3>
                                <h5>&nbsp;You can edit the Placement Policy and make any other necessary changes.</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default EditPolicy;