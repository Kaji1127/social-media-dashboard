import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './ToggleButton.scss';

const ToggleButton = () => {
	const themeCtx = useContext(ThemeContext);
	const darkTheme = themeCtx.state.darkTheme;

	const [theme, setTheme] = useState('light-theme');
	document.documentElement.className = theme;

	const toggleThemeHandler = () => {
		if (darkTheme) {
			themeCtx.dispatch({ type: 'LIGHT_THEME' });
			document.documentElement.className = setTheme('light-theme');
		} else {
			themeCtx.dispatch({ type: 'DARK_THEME' });
			document.documentElement.className = setTheme('dark-theme');
		}
	};

	return (
		<div className="toggle">
			<p className="toggle__text">Dark Mode</p>
			<div className="toggle__container">
				<input
					type="checkbox"
					id="checkbox"
					className="toggle__checkbox"
					onChange={toggleThemeHandler}
				/>
				<label
					htmlFor="checkbox"
					className={`toggle__label ${
						darkTheme ? 'toggle__label--dark' : 'toggle__label--light'
					}`}
				>
					<span className="toggle__round"></span>
				</label>
			</div>
		</div>
	);
};

export default ToggleButton;
