import React, { useReducer } from 'react';

const ThemeContext = React.createContext();

const initialState = {
	theme: 'dark-theme',
};

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'LIGHT_THEME':
			return { theme: 'light-theme' };

		case 'DARK_THEME':
			return { theme: 'dark-theme' };

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
