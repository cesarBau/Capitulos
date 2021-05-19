import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Detail.css'

const urlLocation = 'https://rickandmortyapi.com/api/location/'
const urlEpisodio = 'https://rickandmortyapi.com/api/episode/'

export class Details extends Component {
    render() {
        const {
            id, name,
            status, image,
            type,species,
            gender, episode,
            locationName, locationUrl,
            originUrl, originName } = this.props
        const location = `/location/${String(locationUrl).replace(urlLocation, '')}/${id}`
        const locationOrigin = `/location/${String(originUrl).replace(urlLocation, '')}/${id}`
        console.log(name)
        return (
            <div className="content">
                <div className='Detail'>
                    <h1>{name}</h1>
                        <img src={image} alt={name} />
                    <h3>Estado: {status}</h3>
                    <h3>Tipo:
                        {type !== '' ? type : ' unknown'}
                    </h3>
                    <h3>Localizacion: 
                        {locationName !== 'unknown' ?
                            <Link to={location}> {locationName}</Link> :
                            ' unknown'
                        }
                    </h3>
                    <h3>Origen: 
                        {originName !== 'unknown' ?
                            <Link to={locationOrigin}> {originName}</Link> :
                            ' unknown'
                        }
                    </h3>
                    <h3>Genero: {gender}</h3>
                    <h3>Especie: {species}</h3>
                    <h3>Episodios: </h3>
                    <lu>
                        {
                            !episode ? 'Cargando...'
                            : episode.map(cap => {
                                const idEspisode = String(cap).replace(urlEpisodio, '') 
                                const goEpisode = `/episode/${idEspisode}/${id}`
                                return(
                                    <li>
                                    {
                                        <Link to={goEpisode}> {idEspisode}</Link>
                                    }
                                    </li>)
                            })
                        }
                    </lu>
                    <br/>
                    <Link to={`/`}><button className="button is-dark">Regresar</button></Link>
                </div>
            </div>
        )
    }
}
