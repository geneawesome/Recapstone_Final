import React from "react";
import Form from "react-bootstrap/Form";
// import axios from "axios";
import "./Booknow.css";

// const options = {
//   method: "GET",
//   url: "https://tripadvisor16.p.rapidapi.com/api/v1/cruises/searchCruises",
//   params: {
//     destinationId: "153339",
//     order: "departure_date",
//     page: "1",
//     currencyCode: "USD",
//   },
//   headers: {
//     "X-RapidAPI-Key": "7bbf2d3475msh4946f20725615d2p12e534jsna30c90b33bca",
//     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//   },
// };

// const locationOption = {
//   method: "GET",
//   url: "https://tripadvisor16.p.rapidapi.com/api/v1/cruises/getLocation",
//   headers: {
//     "X-RapidAPI-Key": "7bbf2d3475msh4946f20725615d2p12e534jsna30c90b33bca",
//     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//   },
// };

const Booknow = () => {
  // const [cruises, setCruises] = React.useState([]);
  // const [location, setLocation] = React.useState([]);
  // React.useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data.data.list);
  //       setCruises(response.data.data.list);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <section className="BookHome">
      <div className="BgContainer">
        <div className="homeContent Container">
          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search your Holidays</h1>
          </div>
          {/* <div>
          {cruises.map((cruise) => {
            return <h1 key={cruise.id}>{cruise.seoName}</h1>;
          })}
        </div> */}
          <div className="cardDiv grid">
            <div className="ps-3">
              <h3>Origin:</h3>
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
              <h3>Destination:</h3>
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
            <div className="booknow-content">
              <div className="btn-box">
                <a href="/Booknow">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booknow;
