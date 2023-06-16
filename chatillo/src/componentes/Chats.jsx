import { doc, onSnapshot } from 'firebase/firestore';

import React, { useContext, useEffect, useState } from 'react'
import "./css/chats.css"
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

export const Chats = () => {

	const [chats, setChats] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const { dispatch } = useContext(ChatContext);

	useEffect (() => {
		const getChats = () => {
			const unsub = onSnapshot(doc(db, "chatUsuario", currentUser.uid), (doc) => {
				setChats(doc.data())
			});
			return () => {
				unsub();
			};
		};

		currentUser.uid && getChats();
	}, [currentUser.uid]);

	const handleSelect = (usuario) => {
		dispatch({type: "CAMBIO_USUARIO", payload: usuario})
	}

	return (
		<div className="chats">
			{Object.entries(chats)?.map(chat => (
				<div className="chatUsuario" key = {chat[0]} onClick = {() => handleSelect(chat[1].infoUsuario)}>
					<img src={chat[1].infoUsuario.photoURL} alt="" />
					<div className="infoUsuario">
						<span>{chat[1].infoUsuario.displayName}</span>
						<p>{chat[1].infoUsuario.ultimoMensaje?.text}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Chats