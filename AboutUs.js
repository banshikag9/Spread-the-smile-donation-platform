import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import Footer from "./Footer";
import { Fade, Slide } from "react-awesome-reveal"; // Import animations

const AboutUs = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container className="bg-light text-center mt-2 p-2 rounded">
        <Fade cascade>
          <h1 className="display-4 text-primary mb-2 font-weight-bold">
            SPREAD THE SMILE-DONATION PLATFORM
          </h1>
          <p className="lead">
            Our mission is to help you make a positive impact on the world by
            enabling you to easily donate to causes you care about.
          </p>
        </Fade>
      </Container>
      <Container className="mt-5 bg-white rounded shadow-lg">
        <Fade>
          <h1 className="text-center mb-5">About Us</h1>
        </Fade>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Slide direction="left">
              <Image
                src="https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg"
                alt="About Us"
                fluid
              />
            </Slide>
          </Col>
          <Col md={6}>
            <Slide direction="right">
              <h2 className="mb-4">SPREAD THE SMILE-DONATION PLATFORM</h2>
              <p>
                In India, we often see NGOs and donors working in silos lacking a
                common standardized platform to handle end-to-end donation
                processes. Spread the Smile-Donation Platform aims to address this critical issue by
                bridging this gap between donors and recipients. In this system,
                donors will be assisted throughout the donation decision-making
                process. Verified recipients’ demands will be fulfilled swiftly
                through volunteers. This platform promises to bring credibility
                and efficiency in the existing system.
              </p>
            </Slide>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3}>
            <Fade>
              <Card className="p-3 mb-3 bg-secondary text-white rounded shadow">
                <Card.Body>
                  <i className="fas fa-bullseye fa-3x mb-3"></i>
                  <Card.Title>Vision</Card.Title>
                  <Card.Text>
                    The idea is to create self-sustained chapters across the world
                    who will look after their local community. And in the process,
                    inspire people around us to give back to those who need it
                    most.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={3}>
            <Fade delay={200}>
              <Card className="p-3 mb-3 bg-success text-white rounded shadow">
                <Card.Body>
                  <i className="fas fa-users fa-3x mb-3"></i>
                  <Card.Title>Who We Are</Card.Title>
                  <Card.Text>
                    The Spread the Smile-Donation Platform is a volunteer-based, zero-funds
                    organization that works to get surplus food, stationary,
                    clothes from society and the community to serve them to the
                    less fortunate people.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={3}>
            <Fade delay={400}>
              <Card className="p-3 mb-3 bg-info text-white rounded shadow">
                <Card.Body>
                  <i className="fas fa-bullhorn fa-3x mb-3"></i>
                  <Card.Title>Mission</Card.Title>
                  <Card.Text>
                    The idea is to create self-sustained chapters across the world
                    who will look after their local community. And in the process,
                    inspire people around us to give back to those who need it
                    most.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
