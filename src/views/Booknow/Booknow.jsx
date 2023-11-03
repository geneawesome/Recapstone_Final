import React from "react";
import Form from "react-bootstrap/Form";

import "./Booknow.css";
const Booknow = () => {
  return (
    <section className="BookHome">
      <div className="homeContent Container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holidays</h1>
        </div>
        <div className="cardDiv grid">
          <div className="ps-3">
            <h3>Departing:</h3>
            <Form.Select
              className="w-25 p-3  "
              aria-label="Default select example "
            >
              <option value="1">Manila</option>
              <option value="2">Cagayan</option>
              <option value="3">Davao</option>
              <option value="3">Cebu</option>
              <option value="3">Palawan</option>
              <option value="3">Siargao</option>
              <option value="3">Ilo-Ilo</option>
              <option value="3">Boracay</option>
              <option value="3">Bohol</option>
              <option value="3">Surigao</option>
            </Form.Select>
          </div>
          <div className="fromPlace">
            <h3>From:</h3>
            <Form.Select
              className="w-25 p-3  "
              aria-label="Default select example "
            >
              <option value="1">Manila</option>
              <option value="2">Cagayan</option>
              <option value="3">Davao</option>
              <option value="3">Cebu</option>
              <option value="3">Palawan</option>
              <option value="3">Siargao</option>
              <option value="3">Ilo-Ilo</option>
              <option value="3">Boracay</option>
              <option value="3">Bohol</option>
              <option value="3">Surigao</option>
            </Form.Select>
          </div>

          <div className="fromPlace">
            <h3>Passengers</h3>
            <Form.Select
              className="w-25 p-3  "
              aria-label="Default select example "
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">7</option>
              <option value="3">8</option>
              <option value="3">9</option>
              <option value="3">10</option>
            </Form.Select>
          </div>

          <div className="fromPlace">
            <h3>Ferry Type</h3>
            <Form.Select
              className="w-25 p-3  "
              aria-label="Default select example "
            >
              <option value="1">Regular</option>
              <option value="2">Deluxe</option>
              <option value="3">Super Duluxe</option>
            </Form.Select>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date Depart:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date Return:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/* <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:$3,000</label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Prices
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    $1,000-Regular
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">$2,000-Deluxe</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    $3,000-Super Deluxe
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
          <div className="booknow-content">
            <div className="btn-box">
              <a href="/Booknow">Book Now</a>
              {/* <a href="#">Learn More</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </section>
  );
};

export default Booknow;
