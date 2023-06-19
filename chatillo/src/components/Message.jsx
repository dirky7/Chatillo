import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import "./css/message.css"

const Message = ({ message }) => {

	const CryptoJS = require("crypto-js");

	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	const ref = useRef();

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	}, [message]);

	const translateDate = () =>
	{
		let unix_timestamp = message.date
		var date = new Date(unix_timestamp * 1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();

		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		return formattedTime;
	}

	const decryptMessage = (m) => {

		var decrypt = CryptoJS.AES.decrypt(m, data.chatId).toString(CryptoJS.enc.Utf8);

		var parseFix = decrypt.split('\"');

		return(parseFix[1]);
	}

	return (
		<div
			ref={ref}
			className={`message ${message.senderId === currentUser.uid && "owner"}`}
		>
			<div className="messageInfo">
				<img
					src={
						message.senderId === currentUser.uid
							? currentUser.photoURL
							: data.user.photoURL
					}
					alt=""
				/>
				<span>{translateDate()}</span>
			</div>
			<div className="messageContent">
				<p>{decryptMessage(message.text)}</p>
				{message.img && <img src={message.img} alt="" />}
			</div>
		</div>
	);
};

export default Message;
