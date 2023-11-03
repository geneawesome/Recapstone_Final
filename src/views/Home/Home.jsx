import "./Home.css";
const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Your Gateway to Smooth Ferry Travel.</h1>

          <div className="btn-box">
            <a href="/Booknow">Book Now</a>
            {/* <a href="#">Learn More</a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

// export default Home;

// import React from "react";
// import "./Home.css";
// import video from "../../assets/637948938.mp4";

// const Home = () => {
//   return (
//     <section className="home">
//       <div className="overlay"></div>
//       <video src={video} muted autoPlay loop typeof="sea/mp4"></video>
//       <div className="homeContent container">
//         <div className="textDiv">
//           <span className="smallText">Ourpackages</span>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Home;
