import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PassengerAccom from "../../assets/hotel-booking-concept-flat-style_23-2148163126.jpg";
import DiningServices from "../../assets/catering-service-concept-illustration_114360-7738.jpg";
import EntertainmentActivities from "../../assets/modern-people-doing-cultural-activities_23-2148599167.jpg";
import SafetyMedicalServices from "../../assets/flat-world-health-day-background_23-2149300395.jpg";
const Services = () => {
  return (
    <>
      <section className="whyJoinSection">
        <Container className="text-center grid gap-5">
          <Row
            xs={1}
            md={4}
            className="d-flex justify-content-center mt-5 grid gap-5"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={PassengerAccom} fluid />
                    <h3 className="">Passenger Accommodations</h3>
                    <p>
                      Passenger cabins or seating areas for different comfort
                      levels (Regular, Deluxe, Super Deluxe).Lounge areas with
                      comfortable seating and views.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={DiningServices} fluid />
                    <h3>Dining and Food Services</h3>
                    <p>
                      Restaurants or cafeterias serving a variety of meals,
                      snacks, and beverages.Bars or lounges with alcoholic and
                      non-alcoholic drinks.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row
            xs={1}
            md={4}
            className="d-flex justify-content-center mt-5 grid gap-5"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={EntertainmentActivities} fluid />
                    <h3>Entertainment and Activities</h3>
                    <p>
                      Entertainment areas with options like live music, movies,
                      or games.Outdoor decks for sightseeing and relaxation.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={SafetyMedicalServices} fluid />
                    <h3>Safety and Medical Services</h3>
                    <p>
                      Safety instructions and lifeboat drills.Basic medical
                      facilities and trained personnel in case of emergencies.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
