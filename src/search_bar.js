import React, { Component } from 'react';

//class component
//Want to keep of records about data.
/*ES6 class declaration */
class SearchBar extends  Component {
   //initilizing state in class component. Functional Components doesnt have state only class based components have.
    constructor(props) {
        //calling parents method with super.
        super(props);
        
        
        this.state = {term: ''};
    }
    //method defining es6.
    render(){
        //setting state to save the value
        return(
            <div>
            <input 
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value})} />
            
            </div>
    );
}
    //Event handler decleration
   // onInputChange(event) {
     //   console.log(event.target.value);
    //}
}
//new SearchBar is new instance of class.
//extends gives accesss to all the properties of React.Component class
//Handling events in reactjs Event handler is a function that should be ran whenever an event occurs.
export default SearchBar;

//this.onInput Change() is refrenced to the method.
//onChange= is the property.
//recording value of input on state state is term: '' which is object 
//whenver we represent a javascript variable we use {}
//Value of the input={this.state.term} to show value