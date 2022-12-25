import React, { Component } from 'react'
import '../stylesheets/Tlogin.css'

export default class Tlogin extends Component {
  render() {
    return (
      <div className='tlogin'>
        <div className="left">
          <div className="heading">TEACHER PORTAL</div>
          <div className="card">
            <div className="head">Log In</div>
            <div className="subhead">
              Welcome back! Please enter your details.
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
                <label for="pass">Password - </label>
                <input
                  type="text"
                  name="pass"
                  id="pass"
                  placeholder="Enter your Password"
                />
                <input type="submit" value="Sign in"></input>
              </form>
            </div>
          </div>
        </div>
        <div className="right">
          {/* Can put in something here */}
        </div>
      </div>
    )
  }
}
