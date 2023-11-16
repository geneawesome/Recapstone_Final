import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TermsandCondition.css";
import Image from "react-bootstrap/Image";
import booking from "../../assets/3961373.jpg";
import cancellation from "../../assets/4003203.jpg";
import Passenger from "../../assets/3721245.jpg";
import Cruise from "../../assets/7770570.jpg";
const TermsandCondition = () => {
  return (
    <>
      <section className="TravelInformations">
        <Container className="text-center grid gap-5 mb-5 ">
          <Row
            xs={1}
            md={4}
            className="d-flex justify-content-center mt-5 grid gap-5"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={booking} fluid />
                    <h3 className="">Booking and Reservations:</h3>
                    <p>
                      All bookings are subject to availability. Reservations
                      require a non-refundable deposit at the time of booking.
                      Full payment must be received by specified date to secure
                      the reservation. Changes to reservations may incur
                      additional charges.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={cancellation} fluid />
                    <h3> Cancellation and Refunds:</h3>
                    <p>
                      Cancellation policies vary based on the time of
                      cancellation. Refunds are subject to the terms outlined in
                      the cancellation policy. No refunds for no-shows or
                      cancellations made within specified time of departure.
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
                    <Image src={Passenger} fluid />
                    <h3>Passenger Responsibilities:</h3>
                    <p>
                      Passengers are responsible for obtaining all necessary
                      travel documents. Compliance with all health and safety
                      regulations is mandatory. Any behavior jeopardizing the
                      safety or well-being of others may result in immediate
                      disembarkation.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={Cruise} fluid />
                    <h3>Cruise Itinerary:</h3>
                    <p>
                      Itineraries are subject to change due to unforeseen
                      circumstances or weather conditions. The cruise line
                      reserves the right to alter routes or ports of call for
                      safety reasons.
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

export default TermsandCondition;
