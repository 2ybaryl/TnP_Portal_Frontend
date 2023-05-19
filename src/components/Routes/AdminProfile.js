import React from "react";
import '../stylesheets/AdminProfile.css'
import AdminSideNav from "../components/AdminSideNav";
import TopNav from "../components/TopNav";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
class AdminProfile extends React.Component {
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
                        <h3>Profile</h3>
                        <h5>&nbsp;You can edit and add fields to your profile and make any other necessary changes.</h5>
                    </div>
                    <div className="admin-profile">
                        <div className="admin-profile-top">
                            <img className="admin-image" src="https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
                        </div>
                        <div className="admin-profile-btm">
                            <div id="admin-data">
                                <div className='card-sub-container'>
                                    <div className='main-head'>Name  </div>
                                    <div className='inside'>John Doe</div>
                                </div>
                                <div className='card-sub-container'>
                                    <div className='main-head'>Designation  </div>
                                    <div className='inside'>Training & Placement Co-ordinator</div>
                                </div>
                                <div className='card-sub-container'>
                                    <div className='main-head'>Education </div>
                                    <div className='inside'>M.tech in CSE</div>
                                </div>
                                <div className='card-sub-container'>
                                    <div className='main-head'>Email</div>
                                    <div className='inside'>randomAdmin@gmail.com</div>
                                </div>
                                <div className='card-sub-container'>
                                    <div className='main-head'>Contact</div>
                                    <div className='inside'>+91 94518 97323</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                    </div>
                </div>
            </div>
                
           
        );
    }
}
export default AdminProfile;