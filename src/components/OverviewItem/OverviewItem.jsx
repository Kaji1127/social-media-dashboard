import React from 'react';
import { Card, Info, Likes } from '../index';

const OverviewItem = ({ items }) => {
	return (
		<>
			{items.map((item) => {
				const { id, media, logo, likes, info } = item;

				return (
					<div className={`overview__item ${media}-ov`} key={id}>
						<Card>
							<Info info={info} logo={logo} />
						</Card>
						<Card>
							<Likes likes={likes} logo={logo} />
						</Card>
					</div>
				);
			})}
		</>
	);
};

export default OverviewItem;
