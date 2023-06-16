import { auth } from "../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";


import { useNavigate, Link } from "react-router-dom";
import React from "react";
import "./css/registro.css"

const Login = () => {

	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (formulario) => {
		formulario.preventDefault()
		const email = formulario.target[0].value;
		const password = formulario.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		}
		catch (err) {
			setErr(true);
			console.log(err);
		}
	};

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="titulo">Chatillo</span>
				<span className="subtitulo">¡Bienvenido!</span>
				<form onSubmit={handleSubmit}>
					<input type="text" name="usuario" id="usuario" placeholder="Nombre de usuario" />
					<input type="password" name="contraseña" id="contraseña" placeholder="Contraseña" />
					<button>Inicia sesion</button>
				</form>
				<p>¿No tienes cuenta? <Link to="/registrate">¡Registrate!</Link></p>
			</div>
		</div>
	);
};

export default Login;