import React, { useEffect, useState } from 'react'
import {PersonajeLista} from '../pages/person'

const axios = require('axios');
const urlCaracter='https://rickandmortyapi.com/api/character?page=1'

const Axios = () => {

    const [data,setData] = useState([])
    const [URL,setURL] = useState(urlCaracter)
    const [anterior,setAnterior] = useState('')
    const [siguiente,setSiguiente] = useState('')

    useEffect(() => {
        consumo()
    },[URL])

    const consumo = async () => {
        console.clear()
        const response = await axios.get(URL)
        const {results, info} = response.data
        console.log(results)
        setData(results)
        setAnterior(info.prev)
        setSiguiente(info.next)
        console.log(URL)
    }

    return(
        <div>
            <h1 className="title is-1">Personajes de Rick and Morty</h1>
        {
            !data ? 'Cargando...'
            : data.map(values => {
                return (
                    <div key={values.id} className='Person'>
                        <PersonajeLista
                            id={values.id} name={values.name} image={values.image}
                        />
                    </div>
                    )
                }
            )
        }
        <button className="button is-dark" onClick={() => !anterior ? alert('Es la primera pagina') : setURL(anterior) }>Anterior</button>
        <button className="button is-dark" onClick={() => setURL(siguiente)} >Siguiente</button>
        </div>
    )
}

export default Axios;