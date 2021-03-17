import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const Usuario = () => {
	const [usuario, setUsuario] = useState([])

	const {id} = useParams()
	const getUserData = async() => {
		const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/`)
		const user = await resp.data
		setUsuario(user)
	}

	useEffect( () => {
		getUserData()
	}, [])

	return (
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="well well-sm">
						<div class="row">
							<div class="col-sm-6 col-md-8">
								<h4>{usuario.name}</h4>
								<small><cite title={usuario.username}>{usuario.username} <i class="glyphicon glyphicon-map-marker">
								</i></cite></small>
								<p>
									<i class="glyphicon glyphicon-envelope"></i>{usuario.email}
									<br />
									<i class="glyphicon glyphicon-globe"></i><a href={`https://${usuario.website}`}>{usuario.website}</a>
									<br />
									<i class="glyphicon glyphicon-gift"></i>{usuario.phone}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Usuario
