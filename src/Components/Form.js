import React, {Component} from 'react'



export default class Form extends Component{




state = {
  name: '',
  description: '',
  instructions: '',
  ingredient_name: '',
  amount: ''
}



detectChange=(e)=>{
  this.setState({
    [e.target.name]: e.target.value
  })
}


submitHandler=(e)=>{
  e.preventDefault()
  this.props.makeCocktail(this.state)
}




render(){
  return(
    <form onSubmit={this.submitHandler}>
    <input type="text" placeholder="name" name="name" onChange = {this.detectChange}/>
    <input type="text" placeholder="description" name="description" onChange = {this.detectChange}/>
    <input type="text" placeholder="instructions" name="instructions" onChange = {this.detectChange}/>
    <input type="text" placeholder="ingredient name" name="ingredient_name" onChange = {this.detectChange}/>
    <input type="text" placeholder="amount" name="amount" onChange = {this.detectChange}/>
    <button>Submit</button>
    </form>
  )
}












}
