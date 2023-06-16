import Registro from './paginas/Registro'
import Login from './paginas/Login';
import Inicio from './paginas/Inicio';
import "./styles.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

	const {currentUser} = useContext(AuthContext);

	const RutaProtegida = ({children}) => {
		if (!currentUser)
		{
			return <Navigate to={"/login"}/>
		}

		return children
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<RutaProtegida>
						<Inicio/>
					</RutaProtegida>}></Route>
					<Route path='login' element={<Login/>}></Route>
					<Route path='registrate' element={<Registro/>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
