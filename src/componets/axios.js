import React, { Component } from 'react'
import {PersonajeLista} from './person'

const axios = require('axios').default

export class Axios extends Component{

    constructor(){
        super()
        this.state={
            data: [],
            URL : '',
            anterior: '',
            siguiente: '',
            total:''
        }
    }

    componentDidMount(){
        const {url} = this.props
        this._consumo(url)
    }

    _prev= () => {
        const {anterior, URL} = this.state
        !anterior ? this._consumo(URL):
        this._consumo(anterior)
    }

    _next= () => {
        const {siguiente} = this.state
        this._consumo(siguiente)
    }

    _consumo(url){
        console.clear()
        axios.get(url)
        .then(response => {
            const {results, info} = response.data
            console.log(results)
            this.setState({
                URL: url,
                data: results,
                total: info.count,
                anterior: info.prev,
                siguiente: info.next
            })
            console.log(this.state.URL)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    render(){
        const data = this.state.data
        return(
            <div>
                <h1 className="title is-1">Personajes de Rick and Morty</h1>
            {
                !data ? 'Cargando...'
                : data.map(values => {
                    return (
                        <div key={values.id} className='Person'>
                            <PersonajeLista
                            id={values.id} name={values.name} species={values.species} image={values.image}
                            />
                        </div>
                        )
                    }
                )
            }
            <button className="button is-dark" onClick={this._prev}>Anterior</button>
            <button className="button is-dark" onClick={this._next}>Siguiente</button>
            </div>
        )
    }
}