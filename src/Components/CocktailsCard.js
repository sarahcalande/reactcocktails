import React, {Component} from 'react'
import CocktailSpecs from './CocktailSpecs.js'



export default class CocktailsCard extends Component{


state = {
  cardstate: [],
  clicked: false,
  clickedCards: []
}


removeIt=(e)=>{
  e.target.remove()
}

clickHandler=(cocktailobj)=>{
let id = this.props.cocktailobj.id
  fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
  .then(r=>r.json())
  .then(data => {
    // let newArry = this.state.clickedCards.slice()
    // newArry.push(data)
    this.setState({
    cardstate: data.proportions,
    clicked: !this.state.clicked,
    clickedCards: [this.state.clickedCards, data]
  }, this.giveStateToContainer
)})
}


giveStateToContainer=()=>{
  this.props.itzClicked(this.state.clickedCards)
}


render(){
let cocktailspecs = this.state.cardstate.map(proportionobject => <CocktailSpecs key={proportionobject.id} proportionobject={proportionobject}/>)
if (this.state.clicked === true){
  return(
    <div>
    <h1 onClick = {this.clickHandler}> {this.props.cocktailobj.name} </h1>
<h3>{cocktailspecs}</h3>
</div>
  )
} else {
  return(
    <div>
    <h1 onClick = {this.clickHandler}> {this.props.cocktailobj.name} </h1>
    </div>
        )
      }
}



}
