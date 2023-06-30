import React from 'react';
import PropTypes from 'prop-types';
import Coffee from './Coffee';

function CoffeeDetail(props){

  return(
    <React.Fragment>
      <h2>Coffee Detail's</h2>
      <h3>{props.coffee.name}</h3>
      <h3>{props.coffee.origin}</h3>
      <h3>{props.coffee.price}</h3>
      <h3>{props.coffee.roast}</h3>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
}

export default CoffeeDetail;