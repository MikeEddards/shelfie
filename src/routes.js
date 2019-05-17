import React from "react"
import { Switch, Route } from "react-router-dom"
import Shelf from './Components/Shelf'
import AddTo from './Components/AddTo'
import Edit from './Components/Edit'

export default (
    <Switch>
        <Route exact path='/' component={Shelf} />
        <Route path='/add' component={AddTo} />
        <Route path='/edit/:id' component={Edit}/>
        
    </Switch>


)