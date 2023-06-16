import React, { useContext } from 'react'
import "./css/mensaje.css"
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext';

const Mensaje = ({mensaje}) => {

	const {currentUser} = useContext(AuthContext);
	const {data} = useContext(ChatContext);

	return (
		<div className="mensaje propietario">
			<div className="infoMensaje">
				<img src="https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg" alt="" />
				<span>Justo ahora</span>
			</div>
			<div className="contenidoMensaje">
				<p>Hey</p>
				<img src="https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg" alt="" />
			</div>
		</div>
	)
}

export default Mensaje