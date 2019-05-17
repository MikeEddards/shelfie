import React, { Component } from 'react'
import img from '../images/noImage.png'
import './AddTo.css'

export default class AddTo extends Component {
    constructor(){
        super()
        this.state = {
            imageInput: img,
            nameInput: '',
            priceInput: 0
        }
    }






    
  render() {
    return (
      <div className='main'>
          <form>
              <div className='formPic'>
                  <img src={this.state.imageInput} alt=""/>
              </div>
              <div className='inputSection'>
                  <h2>Image URL:</h2>
                  <input type="text"/>
                  <h2>Product Name:</h2>
                  <input type="text"/>
                  <h2>Price:</h2>
                  <input type="number"/>
              </div>
              <div className='btnBox'>
                  <button className='btn'>Cancel</button>
                  <button className='btn'>Add to inventory</button>
              </div>
          </form>
      </div>
    )
  }
}
