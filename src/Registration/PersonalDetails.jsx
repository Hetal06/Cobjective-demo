import { FormControl, FormGroup, FormLabel, Input } from "@mui/material";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const PersonalDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  const { email, password } = formData;
  const handleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <Container>
      <h2>Personal Details</h2>
      <Row>
        <Col md={5}>
          <FormControl>
            <FormGroup controlid="email" className="my-2">
              <FormLabel>Email</FormLabel>

              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange("email")}
              />
            </FormGroup>
            <FormGroup controlid="password" className="my-2">
              <FormLabel>Password</FormLabel>

              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange("password")}
              />
            </FormGroup>
            <Button className="btn-block" type="button" onClick={handlePrev}>
              Prev
            </Button>
            <Button
              className="btn-block"
              type="button"
              onClick={handleContinue}>
              Continue
            </Button>
          </FormControl>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalDetails;
