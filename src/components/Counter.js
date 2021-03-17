import React, {Fragment, useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)
    
    const Aumentar = () => {
	    setNumber(number + 1)
    }

    const Disminuir = () => {
	    if (number > 0) {
                setNumber(number - 1)
	    }
    }

    return (
	    <div className="container">
		<h2>Valor: {number}</h2>
		<button className="btn btn-success btn-block" onClick={Aumentar}>Aumentar</button>
		<button className="btn btn-success btn-block" onClick={Disminuir}>Disminuir</button>
	    </div>
    )
}

export default Counter
