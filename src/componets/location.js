import React, { Fragment, useEffect, useState } from 'react'
import {Location} from '../pages/location'

const axios = require('axios');
const urlAxios = 'https://rickandmortyapi.com/api/location/'

const Detalle = (props) => {

    const [data,setData] = useState([])
    const [person,setPerson] = useState(0)
    const [residents,setResidents] = useState([])
    const [status,setStatus] = useState(false)

    useEffect(() => {
        consumo()
    },[status])

    const consumo = async () => {
        console.clear()
        const {id} = props.match.params
        const {person} = props.match.params
        const url = urlAxios+id
        const response = await axios.get(url)
        const {data} = response
        const {residents} = data
        console.log(data)
        console.log(person)
        setData(data)
        setStatus(true)
        setResidents(residents)
        setPerson(person)
    }

    return(
        <Fragment>
            {
            !data ? ' Caragndo...'
            : <Location
            dimension={data.dimension}
            name={data.name}
            residents={data.residents}
            person={person}
            type={data.type}
            />
}
        </Fragment>
    )
}

export default Detalle;