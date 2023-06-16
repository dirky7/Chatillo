import React from 'react'
import "./css/navbar.css"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from "react"

const Navbar = () => {

	const {currentUser} = useContext(AuthContext);

	return(
		<div className="navbar">
			<span className="titulo">Chatillo</span>
			<div className="usuario">
				<img src={currentUser.photoURL} alt="" />
				<div>
					<span>{currentUser.displayName}</span>
					<button onClick={() => signOut(auth)}>Cerrar sesion</button>
				</div>
			</div>
		</div>
  	)
}

export default Navbar