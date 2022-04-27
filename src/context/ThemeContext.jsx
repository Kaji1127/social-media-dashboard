import React, { useReducer } from 'react';

const ThemeContext = React.createContext();

const initialState = {
	darkTheme: false,
};

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'LIGHT_THEME':
			return { darkTheme: false };

		case 'DARK_THEME':
			return { darkTheme: true };

		default:
			return state;
	}
};

export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, initialState);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
