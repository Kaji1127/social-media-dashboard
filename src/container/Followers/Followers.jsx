import React from 'react';
import { Card, Follower } from '../../components';
import data from '../../data.json';
import './Followers.scss';

const Followers = () => {
	return (
		<div className="followers">
			{data.map((item) => {
				return (
					<Card key={item.id}>
						<Follower item={item} />
					</Card>
				);
			})}
		</div>
	);
};

export default Followers;
