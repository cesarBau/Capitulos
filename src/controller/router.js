import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home} from '../pages/home'
import Detalle from '../componets/details'
import Location from '../componets/location'
import Episodes from '../componets/episodes'

export class Rutas extends Component{
    render(){
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/data/:id' component={Detalle} />
                    <Route path='/location/:id/:person' component={Location} />
                    <Route path='/episode/:id/:person' component={Episodes} />
                </Switch>
            </div>
        )
    }
}