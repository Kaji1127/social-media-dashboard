import React from 'react';
import ChangeNum from '../ChangeNum/ChangeNum';
import './Info.scss';

const Likes = ({ likes, logo }) => {
	const { title, number, rate } = likes;

	return (
		<div className="info">
			<div className="info__left">
				<h3 className="info__title">{title}</h3>
				<h4 className="info__number">{number}</h4>
			</div>
			<div className="info__right">
				<img className="info__logo" src={logo} alt="logo" />
				<ChangeNum increase={rate} text="%" />
			</div>
		</div>
	);
};

export default Likes;
