import React from "react";
import "./TermsandCondition.css";
const TermsandCondition = () => {
  return (
    <>
      <div class="wrapper TermsandCondition">
        <div class="terms_service">
          <div class="tc_item termsc_head TermsandCondition">
            <div className="text">
              <h2>TERMS OF SERVICE</h2>
            </div>
          </div>
          <div className="tc_item termsc_body">
            <ol>
              <li>
                <h3>Booking and Reservations</h3>
                <p>
                  All bookings are subject to availability. Reservations require
                  a non-refundable deposit at the time of booking. Full payment
                  must be received by specified date to secure the reservation.
                  Changes to reservations may incur additional charges.
                </p>
              </li>
              <li>
                <h3>Cancellation and Refunds</h3>
                <p>
                  Cancellation policies vary based on the time of cancellation.
                  Refunds are subject to the terms outlined in the cancellation
                  policy. No refunds for no-shows or cancellations made within
                  specified time of departure.
                </p>
              </li>
              <li>
                <h3>Passenger Responsibilities</h3>
                <p>
                  Passengers are responsible for obtaining all necessary travel
                  documents. Compliance with all health and safety regulations
                  is mandatory. Any behavior jeopardizing the safety or
                  well-being of others may result in immediate disembarkation.
                </p>
              </li>
              <li>
                <h3>Cruise Itinerary</h3>
                <p>
                  Itineraries are subject to change due to unforeseen
                  circumstances or weather conditions. The cruise line reserves
                  the right to alter routes or ports of call for safety reasons.
                </p>
              </li>
              <li>
                <h3>Health and Safety</h3>
                <p>
                  Passengers must comply with all health and safety protocols,
                  including vaccination requirements. Medical facilities are
                  available onboard, and passengers are responsible for any
                  associated medical expenses.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* <section className="TravelInformations">
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
      </section> */}
    </>
  );
};

export default TermsandCondition;
