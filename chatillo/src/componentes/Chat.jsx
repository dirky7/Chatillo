import React, { useContext } from 'react'
import "./css/chat.css"
import Mensajes from "./Mensajes"
import Input from "./Input"

import Camara from "../imagenes/camera.png"
import Add from "../imagenes/add.png"
import Mas from "../imagenes/mas.png"
import { ChatContext } from '../context/ChatContext'

export const Chat = () => {

	const { data } = useContext(ChatContext);

	return (
		<div className="chat">
			<div className="chatInfo">
				<span>{data.user?.displayName}</span>
				<div className="chatIcons">
					<img src={Camara} alt="" />
					<img src={Add} alt="" />
					<img src={Mas} alt="" />
				</div>
			</div>
			<Mensajes/>
			<Input/>
		</div>
	)
}

export default Chat