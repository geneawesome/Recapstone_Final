import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="aboutTitle">LEARN MORE ABOUT US</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="aboutDescription">
              Dolphin Dancer is not just another travel agency; it's a gateway
              to the world's most enchanting places. With a team of travel
              enthusiasts who are passionate about uncovering the hidden
              treasures of the world, we are dedicated to creating unforgettable
              moments for our clients. Your dreams are our inspiration, and your
              satisfaction is our mission
            </p>
          </Col>
        </Row>
        <Row>
          <button className="btn btnReadMore">Read More</button>
        </Row>
      </Container>
    </section>
  );
};

export default About;
