import React, { Component, Fragment } from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const urlCaracter = 'https://rickandmortyapi.com/api/character/'

export class Location extends Component {
    render() {
        const { dimension, name, residents, person, type } = this.props
        return (
            <div className="content">
                <div className='Detail'>
                <h1 className="title is-1">Ubicacion</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className='subtitle is-2'>{name}</h1>
                <h2 className='subtitle is-2'>Dimension: {dimension}</h2>
                <h2 className='subtitle is-2'>Tipo: {type}</h2>
                <h3 className='subtitle is-3'>Residentes: </h3>
                <lu>
                        {
                            !residents ? 'Cargando...'
                                : residents.map(cap => {
                                    const idPerson = String(cap).replace(urlCaracter, '')
                                    return (
                                        <Fragment>
                                        <li>
                                            {
                                                <Link to={`/data/${idPerson}`}>{idPerson}</Link>
                                            }
                                        </li>
                                        </Fragment>)
                                })
                        }
                    </lu>
                    <br />
                <Link to={`/data/${person}`}><button className="button is-dark">Regresar</button></Link>
            </div>
            </div>
        )
    }
}
