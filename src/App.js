import React, { Component } from 'react';
import CocktailsContainer from './Components/CocktailsContainer.js'
import Form from './Components/Form.js'
import './App.css';

class App extends Component {

state = {
  showncocktail: 1
}


  makeCocktail=(formstate)=>{
    return fetch('http://localhost:3000/api/v1/cocktails', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
     'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: formstate.name,
    description: formstate.description,
    instructions: formstate.instructions
    })
  })
  .then( r => r.json())
  .then(fetch(`http://localhost:3000/api/v1/cocktails/${formstate.id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formstate.name,
      description: formstate.description,
      instructions: formstate.instructions,
      proportions: [{
        ingredient_name: formstate.ingredient_name,
        amount: formstate.amount
      }]
      })
    })
  )};




  render() {
    return (
      <div className="App">
      <Form makeCocktail={this.makeCocktail}/>
      <CocktailsContainer/>
      </div>
    );
  }
}

export default App;
