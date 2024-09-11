import React, { useState } from "react";
import { ProgressBar, ResultPage, Step1, Step2, Step3 } from "../components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../store/userSlice";
const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: {
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    cardInfo: {
      cardNumber: "",
      cardHolderName: "",
      expirationDate: "",
      cvv: "",
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const validateStep1 = () => {
    let errors = {};
    if (!formData.firstName) {
      errors.message = "First Name is required";
      return errors;
    }

    if (!formData.lastName) {
      errors.message = "Last Name is required";
      return errors;
    }
    if (!formData.email) {
      errors.message = "Email is required";
      return errors;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.message = "Email format is invalid";
      return errors;
    }
    if (!formData.password) {
      errors.message = "Password is required";
      return errors;
    }
    if (!formData.confirmPassword) {
      errors.message = "Confirm password is required";
      return errors;
    }
    if (!formData.phone) {
      errors.message = "phone number is required";
      return errors;
    }
  };

  const validateStep2 = () => {
    let errors = {};
    if (!formData.address.streetAddress) {
      errors.message = "streetAdress is required";
      return errors;
    }

    if (!formData.address.city) {
      errors.message = "city is required";
      return errors;
    }
    
    if (!formData.address.state) {
      errors.message = "state required";
      return errors;
    }
    if (!formData.address.postalCode) {
      errors.message = "postalCode is required";
      return errors;
    }
    if (!formData.address.country) {
      errors.message = "country is required";
      return errors;
    }
  };

  const validateStep3 = () => {
    let errors = {};
    if (!formData.cardInfo.cardNumber) {
      errors.message = "Card number  is required";
      return errors;
    }

    if (!formData.cardInfo.cardHolderName) {
      errors.message = "cardholder name is required";
      return errors;
    }
    
    if (!formData.cardInfo.cvv) {
      errors.message = "CVV required";
      return errors;
    }
    if (!formData.cardInfo.expirationDate) {
      errors.message = "expirationDate is required";
      return errors;
    } 
  };

  const nextStep = () => {
    let errors = {};
    if (currentStep === 1) {
      errors = validateStep1();
      if (formData.password !== formData.confirmPassword) {
        setPasswordMatchError(true);
        errors.message = "Passwords do not match";
      } else {
        setPasswordMatchError(false);
      }
    }
    if (currentStep === 2) {
        errors = validateStep2();}
    if (currentStep === 3) {
      errors = validateStep3();
    }

    if (errors) {
      setFormErrors(errors);

    } else {
      console.log("msdb");
      setFormErrors({});
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = () => {
    if (formData.password === formData.confirmPassword) {
      console.log("Form Submitted", formData);
      dispatch(setData(formData))
      navigate("/result", { replace: true })
    } else {
      setPasswordMatchError(true);
    }
  };

  return (
    <div className="bg-[#FF885B] min-h-screen flex justify-center items-center p-4">

      <div className="bg-[#FFE5CF] p-4 rounded-xl w-1/2 ">
      <div className="w-full">

      <ProgressBar step={currentStep} totalSteps={3} />
      </div>

        {currentStep === 1 && (
          <>
            <h1 className="text-center font-bold text-3xl">
              Account Information
            </h1>

            <Step1
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              passwordMatchError={passwordMatchError}
            />
          </>
        )}
        {currentStep === 2 && (
          <>
            <h1 className="text-center font-bold text-3xl">
              Shipping Information
            </h1>

            <Step2
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
            />
          </>
        )}
        {currentStep === 3 && (
          <>
            <h1 className="text-center font-bold text-3xl">
              Payment Information
            </h1>

            <Step3
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
            />
          </>
        )}

        <div className="flex items-center justify-center mt-2  text-2xl font-semibold gap-2 ">
          {currentStep > 1 && (
            <button
              className="bg-white text-zinc-800 p-2 w-1/2 rounded-lg transition-transform transform hover:scale-105 duration-300 "
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {currentStep < 3 && (
            <button
              className="bg-[#557C56] text-[#FFE5CF] p-2 w-1/2 rounded-lg transition-transform transform hover:scale-105 duration-300 "
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button
              className="bg-[#22c352] text-white p-2 w-1/2 rounded-lg transition-transform transform hover:scale-105 duration-300 "
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default Form;
