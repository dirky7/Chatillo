import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

import "./css/navbar.css"

const Navbar = () => {
	const { currentUser } = useContext(AuthContext)

	return (
		<div className='navbar'>
			<span className="logo">Chatillo</span>
			<div className="user">
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