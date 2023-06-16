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

	return (
		<div className="input">
			<input type="text" placeholder='Escribe algo ...' />
			<div className="enviar">
				<img src={Adjuntar} alt="" />
				<input type="file" id="" />
				<label htmlFor="file">
					<img src={Foto} alt="" />
				</label>
				<button>
					Enviar
				</button>
			</div>
		</div>
	)
}

export default Input