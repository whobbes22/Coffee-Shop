import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';
class CoffeeControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
    }
  }
    
  handleClick = () => {
    if(this.state.selectedCoffee != null){
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedCoffee = (id) =>{
    const selectCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectCoffee: selectCoffee});
  }

  handleAddNewCoffeeToList = (newCoffee) =>{
    const updatedCoffee = {
      ...newCoffee
    };
    const newCoffeeList = this.state.mainCoffeeList.concat(updatedCoffee);

    this.setState({mainCoffeeList: newCoffeeList,
    formVisibleOnPage: false
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddNewCoffeeToList} />;
      buttonText ="Return to Coffe List";
    } else {

      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
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