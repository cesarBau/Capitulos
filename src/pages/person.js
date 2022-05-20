import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class PersonajeLista extends Component{

    render(){
        const {id, name, image} = this.props
        return(
            <div className="card" key={id}>
            <div className="card-content">
              <div className="content">
                <h3>{name}</h3>
                <Link to={`/data/${id}`}>
                  <img className='imagenPerson' src={image} alt={name}/>
                </Link>
              </div>
            </div>
          </div>
        )
    }
}