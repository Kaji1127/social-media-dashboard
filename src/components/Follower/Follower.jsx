import React from 'react';
import ChangeNum from '../ChangeNum/ChangeNum';
import FollowerNum from '../FollowerNum/FollowerNum';
import './Follower.scss';

const Follower = ({ item }) => {
	const { increase } = item.follower;
	return (
		<div className={`follower ${item.media}`}>
			<div className="follower__content">
				<div className="follower__account">
					<img src={item.logo} alt="logo" />
					<p className="follower__account-name">{item.account}</p>
				</div>
				<FollowerNum
					text={`${item.media === 'youtube' ? 'Subscribers' : 'followers'}`}
					item={item}
				/>
				<ChangeNum text="Today" increase={increase} />
			</div>
		</div>
	);
};

export default Follower;
