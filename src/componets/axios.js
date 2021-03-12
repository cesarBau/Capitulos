import React, { Component } from 'react'

const axios = require('axios').default

export class Axios extends Component{

    constructor(props){
        super(props)
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
        const {anterior} = this.state
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
            console.log(response);
            console.log(typeof(response))
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
        const total = this.state.total
        return(
            <div>
                <h1>Personajes de Rickand Morty</h1>
                <h2>Total: {total}</h2>
            {
                !data ? 'Cargando...'
                : data.map(values => {
                    return (
                        <div key={values.id}>
                        <br/>
                        <h3>Nombre: {values.name}</h3>
                        <h4>Especie: {values.species}</h4>
                        <img src={values.image}/>
                        <br/> <br/>
                        </div>
                        )
                    }
                )
            }
            <button className="button" onClick={this._prev}>Anterior</button>
            <button className="button" onClick={this._next}>Siguiente</button>
            </div>
        )
    }
}