import React from 'react';
import CoffeeList from './WhaleList';

class CoffeeControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeList: [],
      selectedCoffe: null,
      
    }

    }
    
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddNewCoffeeToList} />;
      buttonText ="Return to Coffe List";
    } else {

      currentlyVisibleState = <CoffeeList coffeList={this.state.mainCoffeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )

  }
}

export default CoffeeControl