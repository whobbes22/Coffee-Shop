import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';

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
    
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedCoffee = (id) =>{
    const selectCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectCoffee});
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

  handleDeletingCoffee = (id) => {
    const selectCoffee = this.state.mainCoffeeList.filter(c => c.id !== id);
    this.setState({
      mainCoffeeList: selectCoffee,
      selectedCoffee: null
    })
  }

  handleEditClick = () =>{
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (editedCoffee) => {
    const editCoffee = this.state.mainCoffeeList.filter(c => c.id !== this.state.selectedCoffee.id).concat(editedCoffee)
    this.setState({
      mainCoffeeList: editCoffee,
      editing: false,
      selectedCoffee: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing){
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee={this.handleEditingCoffeeInList}/>
      buttonText="Return to Coffee List";

    } else if(this.state.selectedCoffee != null){
      currentlyVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee} onClickingDelete = {this.handleDeletingCoffee} onClickingEdit={this.handleEditClick}/>
      buttonText = "Return to Coffee List"

    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddNewCoffeeToList} />;
      buttonText ="Return to Coffee List";

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