import React from 'react';
import { HeaderTitle, ToggleButton } from '../../components';
import data from '../../data.json';

import './Header.scss';

const Header = () => {
	const followerNum = data.map((el) => el.follower.number);

	const totalFollowers = followerNum.reduce((prev, curr) => prev + curr, 0);

	return (
		<header className="header">
			<HeaderTitle
				title="Social Media Dashboard"
				totalFollowers={totalFollowers.toLocaleString()}
			/>
			<ToggleButton />
		</header>
	);
};

export default Header;
