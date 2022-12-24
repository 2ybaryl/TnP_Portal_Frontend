import React, { Component } from "react";
import '../stylesheets/Slogin.css'

export default class Slogin extends Component {
  render() {
    return (
      <div className="login">
        <div className="card">
          <div className="head">Log In</div>
          <div className="subhead">Welcome back! Please enter your details.</div>
          <div className="form">
            <form>
              <label for="erno">Enrollment Number - </label>
              <input type="text" name="erno" id="erno" placeholder="Enter your Enrollment Number"/>
              <label for="dob">Date of Birth - </label>
              <input type="text" name="dob" id="dob" placeholder="Enter your Date of Birth"/>
              <label for="pass">Password - </label>
              <input type="text" name="pass" id="pass" placeholder="Enter your Password"/>
              <input type="submit" value="submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
