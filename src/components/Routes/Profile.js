import React from "react";
import "../stylesheets/Profile.css";
import SideNav from "../components/SideNav";
class Profile extends React.Component {
  render() {
    return (
      <div className="r">
        <div className="main-section">
          <div className="left-section">
            <SideNav />
          </div>
          <div className="right-section">
            <div className="left">
                <img src="https://images.unsplash.com/photo-1564975930787-c41fbcb01b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80" />
                <div className="social">
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Portfolio</li>
                        <li>Dribble</li>
                        <li>Behance</li>

                    </ul>
                </div>
                <div className="buttons">
                    <button id="refresh">Refresh</button>
                    <button id="update">Update</button>
                </div>
            </div>
            <div className="right">
                <input type='text' value='Name' readOnly />
                <input type='text' value='Er No' readOnly />
                <input type='text' value='Year' readOnly />
                <input type='text' value='branch' readOnly />
                <input type='text' value='Current CGPA' readOnly />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
