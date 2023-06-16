import React, { useContext, useEffect, useState } from 'react'
import Mensaje from "./Mensaje"
import "./css/mensajes.css"
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Mensajes = () => {

	const [mensajes, setMensajes] = useState([]);
	const { data } = useContext(ChatContext);

	useEffect(() => {
		const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
			doc.exists() && setMensajes(doc.data().mensajes)
		})

		return () => {
			unSub()
		}
	}, [data.chatId])

	console.log(mensajes);

	return (
		<div className="mensajes">
			{mensajes.map((m) => (
				<Mensaje mensaje = {m} key={m.id}/>
			))}
		</div>
	);
};

export default Mensajes