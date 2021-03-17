import React, {Fragment, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Hola = (props) => {
	const [nombre, setNombre] = useState('RadicalEd')
	useEffect( () => {
		setTimeout( () => {
			setNombre('Goku')
		}, 2000)
	})

	const {apellido} = useParams()

    return (
	    <Fragment>
			<h2>{props.nombre} {apellido}</h2>
			{nombre}
	    </Fragment>
    )
}

export default Hola
