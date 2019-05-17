import React, { Component } from 'react'
import axios from 'axios'
import './Shelf.css'
import {Link} from 'react-router-dom'
import Edit from './Edit'

export default class Shelf extends Component {
    constructor(){
      super()
      this.state = {
        products: []
      }
      this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){

      axios.get('/api/allproducts').then(res =>
        {
        this.setState({products: res.data})})
        .catch(err => console.log(err))
    }

    handleDelete(id){
   
      axios.delete(`/api/allproducts/${id}`).then(
        res => this.setState({products: res.data})
      )
        
    }



  render() {
  
    
      const product = this.state.products.map(list => (
        
        <div className='card'>
          <div className='left'>
            <img className='prodPic' src={list.img} alt={list.name}/>
          </div>
          <div className='right'>
            <div className='top'>
              <h2 className='cardText'>{list.name}</h2>
              <h2 className='cardText'>{`$ ${list.price}`}</h2>
            </div>
            <div className='bottom'>
              <button className='btn2' onClick={() => {
                this.handleDelete(list.id)
              }}>Delete</button>
              <Link to={`/edit/${list.id}`} >
                
              <button className='btn2'>Edit</button>
              </Link>
            </div>
          </div>
          
        </div>
        
      ))




    return (
      <div className='box'>
        
        {product}
      </div>
    )
  }
}
