import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./AddCard.css";
import axios from 'axios';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: '',
        definition: '',
        deck: 0
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleTerm = this.handleTerm.bind(this);
  this.handleDefinition = this.handleDefinition.bind(this);
  this.handleDeck = this.handleDeck.bind(this);
  }
  // helper functions to handle entries
  handleTerm(event) {
    event.preventDefault();
    this.setState({term: event.target.value})
    // console.log(this.state.cardForm)
  }

  handleDefinition(event) {
    event.preventDefault();
    this.setState({definition: event.target.value})
  }

  handleDeck(event) {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({deck: event.target.value})
  }

  handleSubmit() {
    let term = this.state.term
    let definition = this.state.definition
    let deckId = this.state.deck
    let obj = {
      deckId,
      definition,
      term
    }

    axios.post("/card", obj)
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    })
  }


  render () {
    let context = this;
    return (
        <div className='addcard'>
        {/* // card form h2 "CARD FORM" */}
        <h2 className="addcard">Create A New Flash Card</h2>
        <form className="cardform">
            <div  className="mb-3">
              <label htmlFor="formGroupExampleInput"  className="form-label">Term</label>
              <input type="text"  className="form-control" id="formGroupExampleInput" placeholder="YetiCrab" onChange={(e) => context.handleTerm(event)}/>
            </div>      
            <div  className="mb-3">
              <label htmlFor="formGroupExampleInput2"  className="form-label">Definition</label>
              <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder="Kiwa hirsuta is a crustacean discovered in 2005 in the South Pacific Ocean. This decapod, which is approximately 15 cm long, is notable for the quantity of silky blond setae covering its pereiopods." onChange={(e) => context.handleDefinition(event)}/>
            </div>
            <select className="form-select" onChange={(e) => context.handleDeck(event)}>
              <option>Select Your Deck</option>
              <option defaultValue={1}>{1}</option>
              <option defaultValue={2}>{2}</option>
              <option defaultValue={3}>{3}</option>
              <option defaultValue={4}>{4}</option>
              <option defaultValue={4}>{5}</option>
            </select>
        </form>
        <button class="btn btn-primary" type="submit" onClick={context.handleSubmit}>+</button>
        </div>
            )  
        }
    }

export default AddCard;





















/*{ <label htmlFor="term">Term :</label> <br></br>
<span><input type="text" className="termvalue"/> </span>    
<p></p>
<label htmlFor="definition">Definition :</label> <br></br>
<span><input type="text" className="termvalue"/> </span> 
<p></p>
<label htmlFor="deck">Deck Label :</label> <br></br>
<span><input type="text" className="termvalue"/> </span>  }*/
