import React from 'react';
import { OverviewItem } from '../../components';

import './Overview.scss';

const Overview = ({ data }) => {
	return (
		<section className="overview">
			<h2>Overview - Today</h2>
			<div className="overview__contents">
				<OverviewItem items={data} />
			</div>
		</section>
	);
};

export default Overview;
