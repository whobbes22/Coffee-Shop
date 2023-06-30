import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event){
    event.preventDefault();
    props.onNewCoffeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewCoffeeFormSubmission}
      buttonText="Add Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes ={
  onNewCoffeCreation: PropTypes.func
};

export default NewCoffeeForm;