import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import PersonalDetails from "./PersonalDetails";

const Registeration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Confirmation
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
        />
      );
    case 4:
      return <Success />;
    default:
      return <div>Invalid Step</div>;
  }
};

export default Registeration;
