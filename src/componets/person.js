import React, { Component } from 'react'

export class PersonajeLista extends Component{

    render(){
        const {id, name, species, image} = this.props
        return(
            <div className="card" key={id}>
            <div className="card-content">
              <div className="content">
                <h3>{name}</h3>
                <h5>Especie: {species}</h5>
                <img src={image} alt={name}/>
              </div>
            </div>
          </div>
        )
    }
}