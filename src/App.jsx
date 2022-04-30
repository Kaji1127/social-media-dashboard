// import { useContext } from 'react';
// import ThemeContext from './context/ThemeContext';
import { Header, Followers, Overview } from './container';
import { TopBg } from './components';
import data from './data.json';
import './App.scss';

const App = () => {
	return (
		<div>
			<TopBg />
			<div className="app container">
				<Header />
				<main className="main">
					<Followers />
					<Overview data={data} />
				</main>
			</div>
		</div>
	);
};

export default App;
