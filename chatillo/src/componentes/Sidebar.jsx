import React from 'react'
import "./css/sidebar.css"
import Navbar from "./Navbar"
import Busqueda from "./Busqueda"
import Chats from "./Chats"

export const Sidebar = () => {
  return (
	<div className="sidebar">
		<Navbar/>
		<Busqueda/>
		<Chats/>
	</div>
  )
}

export default Sidebar