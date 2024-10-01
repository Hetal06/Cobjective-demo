import {
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  Button,
} from "@mui/material";
import { Row, Col, ListGroupItem, Form } from "react-bootstrap";
import React from "react";

const UserDetails = ({ nextStep, formData, handleChange }) => {
  const { fName, lName, phoneNo } = formData;
  const handleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Container>
      <h2>User Details</h2>
      <Row>
        <Col>
          <Form onSubmit={handleContinue}>
            <FormControl>
              <FormGroup controlid="fName" className="my-2">
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="fName"
                  value={fName}
                  onChange={handleChange("fName")}
                />
              </FormGroup>
              <FormGroup controlid="lName" className="my-2">
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lName"
                  value={lName}
                  onChange={handleChange("lName")}
                />
              </FormGroup>
              <FormGroup controlid="phoneNo" className="my-2">
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="text"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={handleChange("phoneNo")}
                />
              </FormGroup>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="submit"
                  onClick={handleContinue}>
                  {" "}
                  Continue
                </Button>
              </ListGroupItem>
            </FormControl>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
