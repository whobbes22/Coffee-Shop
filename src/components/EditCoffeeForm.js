import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";



function EditCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event){
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: Coffee.id
    });
  }
    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleNewCoffeeFormSubmission}
          buttonText="Edit Whale" />
      </React.Fragment>
    );
}

EditCoffeeForm.propTypes = {
  whale: PropTypes.object,
  onEditWhale: PropTypes.func
};

export default EditCoffeeForm;