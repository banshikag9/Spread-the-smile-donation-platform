import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import Footer from "./Footer";
import { Fade, Slide } from "react-awesome-reveal"; // Import animations

export function Contact() {
  return (
    <>
      <NavigationBar />
      <Container className="bg-light text-center mt-2 p-4 rounded shadow-sm">
        <Fade>
          <h1 className="display-4 text-primary mb-4 font-weight-bold">
            SPREAD THE SMILE-DONATION PLATFORM
          </h1>
          <p className="lead">
            Our mission is to help you make a positive impact on the world by
            enabling you to easily donate to causes you care about.
          </p>
        </Fade>
      </Container>
      <Container
        className="bg-light mt-4 p-5 rounded shadow-sm"
        style={{ marginBottom: "100px" }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <Slide direction="up">
              <h2 className="text-center font-weight-bold mb-4">
                Contact Us
              </h2>
            </Slide>
            <Slide direction="up" delay={100}>
              <p className="text-center lead mb-4">
                In India, we often see NGOs and donors working in silos lacking
                a common standardized platform to handle end-to-end donation
                processes.
                <span className="text-primary"> Spread the Smile-Donation Platform</span> aims to
                address this critical issue by bridging this gap between donors
                and recipients. This platform promises to bring credibility and
                efficiency to the existing system.
              </p>
              <p className="text-center lead mb-5">
                If you have any questions, feedback, or want to get involved with
                <span className="text-primary"> Spread the Smile-Donation Platform</span>, please
                don't hesitate to reach out to us.
              </p>
            </Slide>
            <Slide direction="up" delay={200}>
              <Row className="justify-content-center">
                <Col md={6}>
                  <Card className="shadow">
                    <Card.Body>
                      <h2 className="text-primary font-weight-bold mb-4">
                        Contact Information:
                      </h2>
                      <p className="mb-0">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        Address: XYZ street, ABC city, India
                      </p>
                      <p className="mb-0">
                        <i className="fas fa-envelope mr-2"></i>
                        Email: info@charityxchange.com
                      </p>
                      <p className="mb-0">
                        <i className="fas fa-phone-alt mr-2"></i>
                        Phone: +91-1234567890
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="shadow">
                    <Card.Body>
                      <p className="text-primary font-weight-bold mb-4">
                        For inquiries or partnership opportunities, please
                        contact us:
                        <br />
                        Email:{" "}
                        <a
                          href="mailto:info@charityxchange.com"
                          style={{ color: "black" }}
                        >
                          info@charityxchange.com
                        </a>
                      </p>
                      <p>Phone: +91-1234567890</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Slide>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
