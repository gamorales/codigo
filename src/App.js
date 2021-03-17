import './App.css';
import Form from './components/Form'
import Hola from './components/Hola'
import List from './components/List'
import Usuario from './components/Usuario'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

function App() {
  return (
	  <Router>
		  <Link to="/" className="badge badge-primary mr-2">Principal</Link>
		  <Link to="/inicio" className="badge badge-secondary mr-2">Saludo</Link>
		  <Link to="/form" className="badge badge-success mr-2">Formulario</Link>
		  <Link to="/list" className="badge badge-info">Lista</Link>

		  <Switch>
			  <Route exact path="/">
				  Principal
			  </Route>
			  <Route path="/inicio/:apellido">
				  <Hola nombre="Guillermo" />
			  </Route>
			  <Route path="/form">
				  <Form />
			  </Route>
			  <Route path="/list">
				  <List />
			  </Route>
			  <Route path="/usuario/:id">
				  <Usuario />
			  </Route>
		  </Switch>
	  </Router>
  );
}

export default App;
