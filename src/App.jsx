// import { useContext } from 'react';
// import ThemeContext from './context/ThemeContext';
import { Header, Followers, Overview } from './container';
import { TopBg } from './components';
import './App.scss';

const App = () => {
	// const themeCtx = useContext(ThemeContext);
	// const theme = themeCtx.state.theme;

	// const toggleThemeHandler = () => {
	// 	if (theme === 'dark-theme') {
	// 		themeCtx.dispatch({ type: 'LIGHT_THEME' });
	// 	} else {
	// 		themeCtx.dispatch({ type: 'DARK_THEME' });
	// 	}
	// };

	// const numChange = (num) => {
	// 	if (num > 10000) {
	// 		console.log(`${Math.floor(num / 1000)}k`);
	// 	} else {
	// 		return num;
	// 	}
	// };
	// numChange(11734);
	return (
		<div className="dark-theme">
			<TopBg />
			<div className="app container">
				<Header />
				<main>
					<Followers />
					<Overview />
				</main>
			</div>
		</div>
	);
};

export default App;
