import React, {Component} from 'react'
import CocktailsCard from './CocktailsCard.js'


export default class CocktailsContainer extends Component{

  state = {
    cocktails: [],
    searchedCocktails: [],
    clickedCards: []
  }


componentDidMount=()=>{
  fetch('http://localhost:3000/api/v1/cocktails')
  .then(r=>r.json())
  .then(data => this.setState({
    cocktails: data
  }))
}


searchCocktails=(e)=>{
  let thesearchedCocktails  = this.state.cocktails.filter(cocktail => cocktail.name.includes(e.target.value))
  this.setState({
    searchedCocktails: thesearchedCocktails
  })
}



itzClicked=(passedState)=>{
  this.setState({
    clickedCards: passedState
  })
}




render(){
  let cocktailcards = this.state.cocktails.map(cocktailobj => <CocktailsCard cocktailobj={cocktailobj} key={cocktailobj.id} itzClicked={this.itzClicked} />)
  let filteredcards = this.state.searchedCocktails.map(cocktailobj => <CocktailsCard cocktailobj={cocktailobj} key={cocktailobj.id} itzClicked={this.itzClicked}/>)
  let clickedcards = this.state.clickedCards.map(cocktailobj => <CocktailsCard clickedDiv={this.state.clickedDiv} cocktailobj={cocktailobj} key={cocktailobj.id} itzClicked={this.itzClicked}/>)

if (this.state.searchedCocktails){
return(
  <div className="div">
  <div className="leftdiv">
  <h1> Favorite Cocktail </h1>
  {clickedcards}
  </div>
    <div>
    <input type="search" onChange={this.searchCocktails}/>
  {filteredcards}
  </div>
  </div>
      )
      } else {
        return(
          <div>
          <input type="search" onChange={this.searchCocktails}/>
          <div className="leftdiv">
          {clickedcards}
          </div>
        {cocktailcards}
        </div>
      )
    }
  }
}
