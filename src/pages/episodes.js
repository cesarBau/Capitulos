import React, { Component, Fragment } from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const urlCaracter = 'https://rickandmortyapi.com/api/character/'

export class Episode extends Component {
    render() {
        const { air_date, name, episode, characters, person} = this.props
        return (
            <div className="content">
                <h1 className="title is-1">Episodios</h1>
                <div className='Detail'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{name}</h1>
                <h2>Fecha al aire: {air_date}</h2>
                <h2>Episodio: {episode}</h2>
                <h3>Residentes: </h3>
                <lu>
                        {
                            !characters ? 'Cargando...'
                                : characters.map(cap => {
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
