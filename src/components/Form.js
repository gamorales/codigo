import React, {useState} from 'react'
import uniqid from 'uniqid'

const Form = () => {
    
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [id, setId] = useState('')
    const [listaNombres, setListaNombres] = useState([])
	const [modoEdicion, setModoEdicion] = useState(false)
	const [error, setError] = useState(null)

    const addNombre = (event) => {
	    event.preventDefault()

	    if (!nombre.trim()) {
			setError("Nombre vacio")
			return
	    }
	    if(edad <= 0) {
			setError("Edad vacio")
			return
	    }

		if (modoEdicion) {
			const editUsuario = listaNombres.map( item =>
				item.id === id ? {id: id, nombre: nombre, edad: edad} : item
			)
	        setListaNombres(editUsuario)
			setModoEdicion(false)
		} else {
			const nuevoUsuario = {
				id: uniqid(),
				nombre: nombre,
				edad: edad
			}

	        setListaNombres([...listaNombres, nuevoUsuario])
		}
	    setNombre('')
	    setEdad(0)
		setId('')
		setError(null)
    }
    const delNombre = (id) => {
        const nuevaLista = listaNombres.filter(item => item.id !== id)
        setListaNombres(nuevaLista)
    }
	const editNombre = (objNombre) => {
		setModoEdicion(true)
		setNombre(objNombre.nombre)
		setEdad(objNombre.edad)
		setId(objNombre.id)
	}

    return(
	    <div className="container">
			<div className="row">
				<div className="col">
					<h2>Listado de nombres</h2>
					<ul className="list-group">
					{
						listaNombres.map(item =>
							<li key={item.id} className="list-group-item">
								{item.nombre} -> {item.edad}
								<button 
									className="btn btn-danger float-right"
									onClick={ () => {delNombre(item.id)}}>
										Eliminar
								</button>
								<button 
									className="btn btn-info float-right mr-1"
									onClick={ () => {editNombre(item)}}>
										Editar
								</button>
							</li>
						)
					}
					</ul>
				</div>
				<div className="col">
					<form onSubmit={(e) => addNombre(e)} className="form-group">
						<input type="hidden" value={id} onChange={(e) => {setId(e.target.value)}} />
						<input 
						placeholder="Nombre" 
						className="form-control mb-3" 
						type="text" 
						value={nombre}
						onChange={(e) => {setNombre(e.target.value) }}
						/>
						<input 
						placeholder="Edad" 
						className="form-control mb-3" 
						type="text" 
						value={edad}
						onChange={(e) => {setEdad(e.target.value) }}
						/>
						<input 
							className="btn btn-info btn-block mb-3" 
							type="submit"
							value={modoEdicion ? "Actualizar" : "Registrar"}
						/>
					</form>
					{
					    error != null ? (
					        <div className="alert alert-danger">{error}</div>
					    ) : (
						    <div></div>
					    )
					}
				</div>
			</div>
	    </div>
    )
}

export default Form
