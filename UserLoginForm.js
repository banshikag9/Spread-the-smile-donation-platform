import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { donorLogin } from "../services/DonerApiService";
import { NavigationBar } from "./NavigationBar";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

export function UserLoginForm() {
  // Define state for form inputs and errors
  const [donorDetails, setDonorDetails] = useState({
    donorEmail: "",
    donorPassword: "",
  });
  const [verified, setVerified] = useState(true);
  const [loading, setLoading] = useState(false);
  const [donorEmailError, setDonorEmailError] = useState("");
  const [donorPasswordError, setDonorPasswordError] = useState("");
  const [errors, setErrors] = useState("");
  const [isVisible, setIsVisible] = useState(false); // For animation
  const navigate = useNavigate();

  useEffect(() => {
    // Show the form with a fade-in effect
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setDonorDetails({ ...donorDetails, [e.target.name]: e.target.value });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    if (!validate()) {
      return;
    } else {
      setLoading(true);
      try {
        let obj = {
          donorEmail: donorDetails.donorEmail.toLowerCase(),
          donorPassword: donorDetails.donorPassword,
        };

        const response = await donorLogin(obj);
        console.log(response);
        if (response.status === 200) {
          if (response.data !== "") {
            if (response.data.adminEmail) {
              localStorage.setItem("admin", JSON.stringify(response.data));
              console.log(JSON.parse(localStorage.getItem("admin")));
              navigate("/adminDonationAssign");
            } else if (response.data.donorId) {
              localStorage.setItem("donor", JSON.stringify(response.data));
              console.log(JSON.parse(localStorage.getItem("donor")));
              navigate("/donorHome");
            } else if (response.data.recipientId) {
              localStorage.setItem("recipient", JSON.stringify(response.data));
              console.log(JSON.parse(localStorage.getItem("recipient")));
              navigate("/recipientHome");
            } else if (response.data.volunteerId) {
              localStorage.setItem("volunteer", JSON.stringify(response.data));
              console.log(JSON.parse(localStorage.getItem("volunteer")));
              navigate("/volunteerHome");
            }
          } else {
            setErrors("Invalid Login Credentials");
          }
        }
      } catch (error) {
        setErrors("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const validate = () => {
    let isValid = true;
    if (donorDetails.donorEmail.trim() === "") {
      setDonorEmailError("Email is required");
      isValid = false;
    } else if (!/^[a-z]{1}[a-z0-9]{0,}@[a-z]{1,}\.[a-z]{1,}$/i.test(donorDetails.donorEmail)) {
      setDonorEmailError("Email is not valid");
      isValid = false;
    } else {
      setDonorEmailError("");
    }

    if (donorDetails.donorPassword.trim() === "") {
      setDonorPasswordError("Password is required");
      isValid = false;
    } else if (donorDetails.donorPassword.length < 8) {
      setDonorPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setDonorPasswordError("");
    }
    return isValid;
  };

  return (
    <>
      <NavigationBar />
      <Container className="bg-light text-center mt-0 p-3 rounded">
        <h1 className="display-4 text-primary mb-4 font-weight-bold">
          SPREAD THE SMILE-DONATION PLATFORM
        </h1>
        <p className="lead">
          Our mission is to help you make a positive impact on the world by
          enabling you to easily donate to causes you care about.
        </p>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center pb-3"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Form
            onSubmit={handleSubmit}
            className="p-5 rounded"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 className="mb-4 text-center mt-2 p-3">Login</h1>
            <Row>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>User Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="donorEmail"
                    value={donorDetails.donorEmail}
                    onChange={handleChange}
                    className={
                      donorEmailError
                        ? "form-control-danger"
                        : "form-control-primary"
                    }
                  />
                  {donorEmailError && (
                    <Form.Text className="text-danger">
                      {donorEmailError}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="donorPassword"
                    value={donorDetails.donorPassword}
                    onChange={handleChange}
                    className={
                      donorPasswordError
                        ? "form-control-danger"
                        : "form-control-primary"
                    }
                  />
                  {donorPasswordError && (
                    <Form.Text className="text-danger">
                      {donorPasswordError}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Col className="text-center">
              {errors && <Form.Text className="text-danger">{errors}</Form.Text>}
            </Col>
            <div className="d-flex justify-content-center mb-3">
              <ReCAPTCHA
                sitekey="6LdTH_UkAAAAAHKD0qtLrAlrb1CFvsYb1C4XpZfD"
                onChange={onChange}
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                disabled={verified}
                className="mb-3"
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
            <div className="text-center">
              <Link to={"/forgotPassword"}>Forget password?</Link>
            </div>
          </Form>
        </motion.div>
      </Container>
    </>
  );
}
