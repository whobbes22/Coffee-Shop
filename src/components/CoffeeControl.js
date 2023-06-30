import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';
class CoffeeControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeList: [],
      selectedCoffe: null,
    }
  }
    
  handleClick = () => {
    if(this.state.selectedCoffe != null){
      this.setState({
        formVisibleOnPage: false,
        selectedCoffe: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedCoffee = (id) =>{
    const selectCoffee = this.state.mainCoffeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectCoffee: selectCoffee});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddNewCoffeeToList} />;
      buttonText ="Return to Coffe List";
    } else {

      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
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