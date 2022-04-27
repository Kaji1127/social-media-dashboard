import React from 'react';
import './Follower.scss';

const Follower = ({ item }) => {
	const changeFollowerNumDisplay = (num) => {
		if (num > 10000) {
			return `${Math.floor(num / 1000)}k`;
		} else {
			return num;
		}
	};
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
				<div className="follower__changes">
					{item.follower.increase > 0 ? (
						<>
							<img src="./assets/icon-up.svg" alt="Follower Increase" />
							<h3 className="increase">{item.follower.increase} Today</h3>
						</>
					) : (
						<>
							<img src="./assets/icon-down.svg" alt="Follower Decrease" />
							<h3 className="decrease">
								{item.follower.increase.toString().replace('-', '')} Today
							</h3>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Follower;
