import React, { useContext, useState } from 'react'
import "./css/input.css"

import Foto from "../imagenes/foto.png"
import Adjuntar from "../imagenes/adjuntar.png"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

export const Input = () => {

	const [texto, setTexto] = useState("");
	const [img, setImg] = useState(null);

	const {currentUser} = useContext(AuthContext);
	const {data} = useContext(ChatContext);

	const handleSend = () => {

	}

	return (
		<div className="input">
			<input type="text" placeholder='Escribe algo ...' onChange={e => setTexto(e.target.value)}/>
			<div className="enviar">
				<img src={Adjuntar} alt="" />
				<input type="file" id="file" onChange={e => setImg(e.target.files[0])} />
				<label htmlFor="file">
					<img src={Foto} alt="" />
				</label>
				<button onClick={handleSend}>
					Enviar
				</button>
			</div>
		</div>
	)
}

export default Input