import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.origin}</p>
        <p>{props.price}</p>
        <p>{props.roast}</p>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;