import React from 'react';
import ChangeNum from '../ChangeNum/ChangeNum';
import './Follower.scss';

const Follower = ({ item }) => {
	const changeFollowerNumDisplay = (num) => {
		if (num > 10000) {
			return `${Math.floor(num / 1000)}k`;
		} else {
			return num;
		}
	};
	const { increase } = item.follower;
	return (
		<div className={`follower ${item.media}`}>
			<div className="follower__content">
				<div className="follower__account">
					<img src={item.logo} alt="logo" />
					<p className="follower__account-name">{item.account}</p>
				</div>
				<h2 className="follower__number">
					{changeFollowerNumDisplay(item.follower.number)}
					<span className="follower__number-text">Followers</span>
				</h2>
				<ChangeNum text="Today" increase={increase} />
			</div>
		</div>
	);
};

export default Follower;
