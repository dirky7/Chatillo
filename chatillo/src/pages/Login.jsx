import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/chats")
		} catch (err) {
			setErr(true);
		}
	};
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Chatillo</span>
				<span className="title">¡Inicio de sesion!</span>
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Contraseña" />
					<button>Entra</button>
					{err && <span>Algo fue mal :(</span>}
				</form>
				<p>¿No tienes cuenta? <Link to="/register">¡Registrate!</Link></p>
			</div>
		</div>
	);
};

export default Login;
