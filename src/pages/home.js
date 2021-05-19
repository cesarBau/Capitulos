import React, {Component, Fragment} from 'react'
import Axios from '../componets/axios'
import logo from '../logo.svg'

export class Home extends Component{
    render(){
        return (
            <Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Axios/>
            </header>
            </Fragment>
        )
    }
}