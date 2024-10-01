import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Confirmation = ({ nextStep, prevStep, formData }) => {
  const { fName, lName, phoneNo, email, password } = formData;

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
      <Row>
        <Col>
          <div>
            <h4>First Name : </h4>
            {fName}
          </div>
          <div>
            <h4>Last Name : </h4>
            {lName}
          </div>
          <div>
            <h4>Phone No : </h4>
            {phoneNo}
          </div>
          <div>
            <h4>Email : </h4>
            {email}
          </div>
          <div>
            <h4>Password : </h4>
            {password}
          </div>

          <button onClick={handleContinue} type="button">
            Continue
          </button>
          <button onClick={handlePrev} type="button">
            Prev
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmation;
