import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';

function Index() {
  return (
	<div className='index'>
		<main className='main'>
			<div>
				<h1>
					<span>Chat</span><span>illo</span>
				</h1>
			</div>
			<p>Una nueva forma de comunicarse de manera <i>encriptada</i></p>
			<div className='button'>
				<Link to={"/login"}>
					<button>¡Inicia sesión!</button>
				</Link>
				<Link to={"/register"}>
					<button>¡Registrate!</button>
				</Link>
			</div>
		</main>
		<footer className='footer'>
			<p>Proyecto Web</p>
			<p>Curso 22/23</p>
			<p>Daniel Hurtado Perera</p>
		</footer>
	</div>
  )
}

export default Index