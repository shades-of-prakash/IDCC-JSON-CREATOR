import React, { createContext, useContext, useState } from "react";

const PasscodeContext = createContext();

export const PasscodeProvider = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useState(false);
	return (
		<PasscodeContext.Provider value={{ isAuthorized, setIsAuthorized }}>
			{children}
		</PasscodeContext.Provider>
	);
};

export const usePasscode = () => useContext(PasscodeContext);
