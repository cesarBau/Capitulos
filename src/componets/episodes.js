import React, { Fragment, useEffect, useState } from 'react'
import {Episode} from '../pages/episodes'

const axios = require('axios');
const urlEpisodio = 'https://rickandmortyapi.com/api/episode/'

const Episodes = (props) => {

    const [data,setData] = useState([])
    const [person,setPerson] = useState(0)
    const [status,setStatus] = useState(false)

    useEffect(() => {
        consumo()
    },[status])

    const consumo = async () => {
        console.clear()
        const {id, person} = props.match.params
        const url = urlEpisodio+id
        const response = await axios.get(url)
        const {data} = response
        console.log(data)
        setData(data)
        setStatus(true)
        setPerson(person)
    }

    return(
        <Fragment>
            {
            !data ? ' Caragndo...'
            : <Episode
            air_date={data.air_date}
            name={data.name}
            episode={data.episode}
            characters={data.characters}
            person={person}
            />
}
        </Fragment>
    )
}

export default Episodes;