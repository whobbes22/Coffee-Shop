import React from "react";
import PropTypes from "prop-types";


/*
name: PropTypes.string.isRequired,
origin: PropTypes.string.isRequired,
price: PropTypes.string.isRequired,
roast: PropTypes.string.isRequired,
id: PropTypes.string,

*/
function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input 
          type="text"
          name="name"
          placeholder="Name of Coffee"/>
        <input 
          type="text"
          name="origin"
          placeholder="Origin of Coffee"/>
        <input 
          type="text"
          name="price"
          placeholder="Price"/>
        <input 
          type="text"
          name="roast"
          placeholder="Type of Roast"/>
        <button type='submit'>Submit Coffee</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;