import React from 'react'

import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav() {
  return (
    <div>
      <nav>
        <div class="logo">
            <img src={require('../images/shelfie_icon.png')} alt="shelfie icon"/>
            <h1 className='title'>SHELFIE</h1>
        </div>
            <div class="linksBox">
                <Link to='/' className='link'>Dashbord</Link>
                <Link to='/add' className='link'>Add to inventory</Link>
            </div>

      </nav>
    </div>
  )
}
