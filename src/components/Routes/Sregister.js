import React, { Component } from 'react';
import '../stylesheets/Sregister.css';

export default class Sregister extends Component {
  render() {
    return (
      <div className='register'>
        <div className="left">
          <div className="heading">STUDENT PORTAL</div>
          <div className="card">
            <div className="head">Register</div>
            <div className="subhead">
              Kindly use your Webkiosk details.
            </div>
            <div className="form">
              <form>
                <label for="erno">Enrollment Number - </label>
                <input
                  type="text"
                  name="erno"
                  id="erno"
                  placeholder="Enter your Enrollment Number"
                />
                <label for="dob">Date of Birth - </label>
                <input
                  type="text"
                  name="dob"
                  id="dob"
                  placeholder="Enter your Date of Birth"
                />
                <label for="pass">Password - </label>
                <input
                  type="text"
                  name="pass"
                  id="pass"
                  placeholder="Enter your Password"
                />
                <input type="submit" value="Sign up"></input>
              </form>
            </div>
            <center>
              <div className="foot">
                Already have an account? <a href="#">Sign in</a>
              </div>
            </center>
          </div>
        </div>
        <div className="right">
          {/* Can put in something here */}
        </div>
      </div>
    )
  }
}
