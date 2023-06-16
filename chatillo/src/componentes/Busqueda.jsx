import { collection, query, where, getDocs, getDoc, setDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import {AuthContext} from "../context/AuthContext"


import { useContext, useState } from 'react';

import React from 'react'
import "./css/busqueda.css"

const Busqueda = () => {

	const [username, setUsername] = useState("");
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	const {currentUser} = useContext(AuthContext)


	const handleSearch = async () => {
		const consulta = query(collection(db, "usuarios"), where("displayName", "==", username));

		try
		{
			const querySnapshot = await getDocs(consulta);
			querySnapshot.forEach((doc) => {
				setUser(doc.data())
			});
		}
		catch (err)
		{
			setErr(true);
		}
	};

	const handleKey = e => {
		handleSearch();
	};

	const handleSelect = async () => {

		var generarIdComb = "";
		var i = 0;
		while (i < currentUser.uid.length)
		{
			generarIdComb += currentUser.uid[i];
			generarIdComb += user.uid[i];
			i++;
		}
		console.log(generarIdComb);

		const idCombinado = generarIdComb;
		try
		{
			const res = await getDoc(doc(db, "chats", idCombinado));
			if (!res.exists())
			{
				await setDoc(doc(db, "chats", idCombinado), {mensajes:[]});

				await updateDoc(doc(db, "chatUsuario", currentUser.uid), {
					[idCombinado + ".infoUsuario"] : {
						uid:user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL
					},
					[idCombinado + ".fecha"] : serverTimestamp()
				});

				await updateDoc(doc(db, "chatUsuario", user.uid), {
					[idCombinado + ".infoUsuario"] : {
						uid:currentUser.uid,
						displayName: currentUser.displayName,
						photoURL: currentUser.photoURL
					},
					[idCombinado + ".fecha"] : serverTimestamp()
				});
			}
		}
		catch (err) 
		{}

		setUser(null);
		setUsername("");
	};

	return (
		<div className="busqueda">
			<div className="formularioBusqueda">
				<input 
				type="text" 
				name="text"
				placeholder="Encuentra a un usuario"
				onKeyDown={handleKey}
				onChange={e => setUsername(e.target.value)}
				value={username}
				/>
			</div>
			{err && <span>No se encontro al usuario</span>}
			{user && <div className="chatUsuario" onClick={handleSelect}>
				<img src={user.photoURL} alt="" />
				<div className="infoUsuario">
					<span>{user.displayName}</span>
				</div>
			</div>}
		</div>
	)
}

export default Busqueda