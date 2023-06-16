import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
	const {currentUser} = useContext(AuthContext);
  
	const ESTADO_INICIAL = {
		chatId: "",
		user: {}
	}

	const chatReducer = (state, action) => {

		console.log(action.payload.uid);
		console.log(currentUser.uid);
		
		var generarIdComb = "";
		var i = 0;
		while (i < currentUser.uid.length)
		{
			generarIdComb += currentUser.uid[i];
			generarIdComb += action.payload.uid[i];
			i++;
		}

		switch (action.type) {
			case "CAMBIO_USUARIO":
				return {
					user: action.payload,
					chatId: generarIdComb
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(chatReducer, ESTADO_INICIAL);

	return (
		<ChatContext.Provider value={{ data:state, dispatch }}>
		{children}
		</ChatContext.Provider>
	);
};