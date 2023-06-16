import React from "react";
import Sidebar from "../componentes/Sidebar"
import Chat from "../componentes/Chat"
import "./css/inicio.css"

const Inicio = () => {
	return (
		<div className="inicio">
			<div className="container">
				<Sidebar/>
				<Chat/>
			</div>
		</div>
	)
}

export default Inicio;