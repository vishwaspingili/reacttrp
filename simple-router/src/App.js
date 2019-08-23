import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="PageSwitcher">

          <a href="0" className="PageSwitcher__Item">Sign In</a>
          <a href="0" className="PageSwitcher__Item PageSwitcher__Item--Active" >Sign Up</a>

        </div>

        <div className="FormTitle">
          <a href="0" className="FormTitle__Link">Sign In</a> or 
          <a href="0" className="FormTitle__Link FormTitle__Link--Active" >Sign Up</a>

        </div>

        <div className="FormCenter">
          <form classname="FormFields" onSubmit={this.handlesubmit}>

            <div className="FormField" >
              <label className="FormFields__Lable" htmlFor="name">Full Name </label> <br/>
              <input type="text" id="name" className="FormField__Input"
                placeholder="Enter your full name" name="name" />
            </div>

            <div className="FormField" >
              <label className="FormFields__Lable" htmlFor="Password  ">Password </label><br/>
              <input type="text" id="Password" className="FormField__Input"
                placeholder="Enter your Password" name="Password" />
            </div>

            <div className="FormField" >
              <label className="FormFields__Lable" htmlFor="email  ">Email address </label><br/>
              <input type="text" id="email" className="FormField__Input"
                placeholder="Enter your email" name="email" />
            </div>

            <div className="FormField" >
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" />
               I agree all statements in <a href="0" className="FormField__TermsLink">terms of service</a>
            </label>
            </div>

            <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> 
                  <a href="0" className="FormField__Link">I'm already member</a>
              </div>
          </form>

        </div>

      </div>
    );
  }
}

export default App;
