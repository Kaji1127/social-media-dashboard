import React from 'react';
import '../Follower/Follower.scss';

const FollowerNum = ({ item, text }) => {
	const changeFollowerNumDisplay = (num) => {
		if (num > 10000) {
			return `${Math.floor(num / 1000)}k`;
		} else {
			return num;
		}
	};
	return (
		<h2 className="follower__number">
			{changeFollowerNumDisplay(item.follower.number)}
			<span className="follower__number-text">{text}</span>
		</h2>
	);
};

export default FollowerNum;
