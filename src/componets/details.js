import React, { Fragment, useEffect, useState } from 'react'
import 'bulma/css/bulma.css';
import {Details} from '../pages/details'

const axios = require('axios');
const urlAxios = 'https://rickandmortyapi.com/api/character/'

const Detalle = (props) => {

    const [data,setData] = useState([])
    const [location,setLocation] = useState([])
    const [origin,setOrigin] = useState([])
    const [status,setStatus] = useState(false)

    useEffect(() => {
        consumo()
    },[status])

    const consumo = async () => {
        console.clear()
        const {id} = props.match.params
        const response = await axios.get(urlAxios+id)
        const{data} = response
        const {location, origin} = data
        console.log(data)
        setData(data)
        setLocation(location)
        setOrigin(origin)
        setStatus(true)
    }

    return(
        <Fragment>
            {
                !data ? 'Cargando...'
                :
                <Details
                name={data.name} 
                status={data.status} 
                image={data.image} 
                type={data.type} 
                location={data.location} 
                locationName={location.name}
                locationUrl={location.url} 
                id={props.match.params.id}
                originName={origin.name} 
                originUrl={origin.url}
                species={data.species}
                gender={data.gender}
                episode={data.episode}
                />
            }
        </Fragment>
    )
}

export default Detalle;