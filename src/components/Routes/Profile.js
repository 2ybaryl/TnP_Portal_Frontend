import React from "react";
import "../stylesheets/Profile.css";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import { Link } from "react-router-dom";
class Profile extends React.Component {
  render() {
    return (
      <>
        <DashboardLayout>
          {/* Profile header Welcome Message */}
          <div className="profile-header">
            <span className="head">Welcome to your Profile</span>
            <span className="sub-head">
              You can edit and add fields to your profile to increase your
              chances of being recruited. This profile will also be used to
              generate a Resume for you in the{" "}
              <Link to="/resume">Resume Section</Link>.
            </span>
          </div>
          <div className="profile-body">
            {/* Profile Image section */}
            <div className="general">
              <div className="pfp">
                <div className="pfp-body">
                  <img src="https://images.unsplash.com/photo-1676044980901-bf50cc624273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80" />
                  <div className="pfp-buttons">
                    <button type="upload">Upload New</button>
                    <button type="delete">Delete Image</button>
                  </div>
                </div>
                <span>
                  For best results, upload image with 1:1 Aspect Ratio.
                </span>
              </div>
            </div>
            <div className="general-info">
              <div className="info">
                <span>General Information</span>
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Name"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Enrollment Number</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Enrollment Number"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Branch</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Current Year"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Current Semester</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Current Semester"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Date of Birth</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Date of Birth"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Gender</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Gender"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Nationality</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Nationality"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Contact Numberr"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Email ID</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Email ID"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Father's Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Father's Name"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Father's Occupation</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Occupation"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Mother's Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Mother's Name"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Mother's Occupation</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Occupation"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group">
                  <label>Permanent Address</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Permanent Address"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="social">
                Social Media Links
                <ul>
                  <li>Twitter - <input type='text'/></li>
                  <li>LinkedIn</li>
                  <li>GitHub</li>
                  <li>Portfolio</li>
                  <li>Dribble</li>
                  <li>Behance</li>
                </ul>
              </div>
            </div>
            <div className="buttons">
              <button id="refresh">Refresh</button>
              <button id="update">Update</button>
            </div>
          </div>
          <div className="right">
            <input type="text" value="Name" readOnly />
            <input type="text" value="Er No" readOnly />
            <input type="text" value="Year" readOnly />
            <input type="text" value="branch" readOnly />
            <input type="text" value="Current CGPA" readOnly />
          </div>
        </DashboardLayout>
      </>
    );
  }
}
export default Profile;
