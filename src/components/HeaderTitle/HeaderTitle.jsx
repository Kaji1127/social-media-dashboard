import React from 'react';
import './HeaderTitle.scss';

const HeaderTitle = ({ title, totalFollowers }) => {
	return (
		<div className="header-title">
			<h1 className="header-title__title">{title}</h1>
			<p className="header-title__followers">
				Total Followers: {totalFollowers}
			</p>
		</div>
	);
};

export default HeaderTitle;
