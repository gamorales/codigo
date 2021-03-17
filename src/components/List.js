import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const List = () => {
	const [usuarios, setUsuarios] = useState([])

	const getUsers = async() => {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
		const users = await resp.data
		setUsuarios(users)
		console.log(resp)
	}
	useEffect( () => {
		getUsers()
	}, [])

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8])
    return (
	    <Fragment>
		{
			usuarios.map((item, index) => 
				<div key={index}>
					<Link to={`/usuario/${item.id}`}>{item.name}</Link>
				</div>
			)
		}
	    </Fragment>
    )
}

export default List
