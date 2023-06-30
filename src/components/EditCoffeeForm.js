import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";



function EditCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event){
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: props.coffee.id
    });
  }
    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleNewCoffeeFormSubmission}
          buttonText="Edit coffee" />
      </React.Fragment>
    );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;