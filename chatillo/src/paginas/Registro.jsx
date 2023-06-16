import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


import React from "react";
import "./css/registro.css"
import Avatar from "../imagenes/add-user.png"
import { useNavigate, Link } from "react-router-dom";

const Registro = () => {

	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (formulario) => {
		formulario.preventDefault()
		const displayName = formulario.target[0].value;
		const email = formulario.target[1].value;
		const password = formulario.target[2].value;
		const file = formulario.target[3].files[0];

		try {
			const storageRef = ref(storage, displayName);
			console.log("bien")
			
			const res = await createUserWithEmailAndPassword(auth, email, password);
			console.log("bien2")

			const uploadTask = uploadBytesResumable(storageRef, file);
			console.log("bien3")

			uploadTask.on(
				(error) => {
					setErr(true);
					console.log(error + "\nbien3.5");
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => 
					{
						console.log("bien4");
						await updateProfile(
							res.user,{
								displayName,
								photoURL: downloadURL,
							}
						);
						console.log("bien5");
						await setDoc(doc(db, "usuarios", res.user.uid),
						{
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL
						});
						console.log("bien6");

						await setDoc(doc(db, "chatUsuario", res.user.uid),{});
						navigate("/");
					});
				}
			);
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
				<span className="subtitulo">¡Registrate!</span>
				<form onSubmit={handleSubmit}>
					<input type="text" name="usuario" placeholder="Nombre de usuario" required />
					<input type="email" name="email" placeholder="Email" required />
					<input type="password" name="password" placeholder="Contraseña" required />
					<input style={{ display: "none" }} type="file" name="file" id="file" required />
					<label htmlFor="file">
						<img src={Avatar} alt="" />
						Añade un avatar
					</label>
					<button>Registrarte</button>
				</form>
				<p>¿Tienes cuenta?<Link to="/login">¡Inicia sesión!</Link></p>

				{err && <span>Algo fue mal :(</span>}

			</div>
		</div>
	);
};

export default Registro;