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
            priceInput: 0,
            item: [],
            id: ''
        }
        this.baseState = this.state
    }
componentDidMount(){
    console.log(this.props.match.params.id)
     axios.get(`/api/product/${this.props.match.params.id}`).then(res =>
       {
           this.setState({
               imageInput: res.data[0].img,
               nameInput: res.data[0].name,
               priceInput: res.data[0].price,
               id: res.data[0].id 
             })
        
        }
    )
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

handleSubmit = (e) => {
    e.preventDefault()
    const { id } = this.state
    const {imageInput, nameInput, priceInput} = this.state
    axios.put(`/api/update/${id}`, {nameInput, priceInput, imageInput}).then(res => console.log(res))
    .catch(err => console.log(err))
}




    
  render() {

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
                  <Link to='/' className='btn'>back</Link>
                  <Link to='/'
                   onClick={this.handleSubmit} className='btn'>Edit
                  </Link>
              </div>
          </form>
      </div>
    )
  }
}
