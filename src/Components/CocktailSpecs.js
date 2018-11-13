import React from 'react'


const CocktailSpecs = props => {


return(
  <div>
  <p>{props.proportionobject.ingredient_name}</p>
  <p>{props.proportionobject.amount}</p>
  </div>
)

}


export default CocktailSpecs;
