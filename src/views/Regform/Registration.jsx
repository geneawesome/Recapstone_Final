import React from "react";
import "./Registration.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <section className="container">
      <header>Registration Form</header>
      <form action="#" class="form">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>

        <Button className="regbutton" as={Link} to="/">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Registration;
