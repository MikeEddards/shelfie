import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import img from '../images/noImage.png'
import './AddTo.css'

export default class AddTo extends Component {
    constructor(){
        super()
        this.state = {
            imageInput: '',
            nameInput: '',
            priceInput: 0
        }
        this.baseState = this.state
    }
urlInput = (val) => {
    this.setState({imageInput: val || img})
}
nameInput = (val) => {
    this.setState({nameInput: val})
}
priceInput = (val) => {
    this.setState({priceInput: val})
}
clear = (e) => {
    e.preventDefault()
    this.setState(this.baseState)

}
handleSubmit = (e) => {
    e.preventDefault()
    const {imageInput, nameInput, priceInput} = this.state
    axios.post('/api/allproducts', {nameInput, priceInput, imageInput}).then(res => console.log(res))
    .catch(err => console.log(err))
}




    
  render() {
      console.log(this.state.nameInput)
    return (
      <div className='main'>
          <form onSubmit={this.handleSubmit}>
              <div >
                  <img className='formPic' src={this.state.imageInput ? this.state.imageInput : img} alt=""/>
              </div>
              <div className='inputSection'>
                  <h2>Image URL:</h2>
                  <input onChange={(e) => this.urlInput(e.target.value)} type="text" value={this.state.imageInput}/>
                  <h2>Product Name:</h2>
                  <input onChange={(e) => this.nameInput(e.target.value)} type="text" value={this.state.nameInput}/>
                  <h2>Price:</h2>
                  <input onChange={(e) => this.priceInput(e.target.value)} type="number" value={this.state.priceInput}/>
              </div>
              <div className='btnBox'>
                  <button onClick={this.clear} className='btn'>Cancel</button>
                  <Link to='/'
                   onClick={this.handleSubmit} className='btn'>Add to inventory
                  </Link>
              </div>
          </form>
      </div>
    )
  }
}
