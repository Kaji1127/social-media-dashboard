import React from 'react';
import './changeNum.scss';

const ChangeNum = ({ text, increase }) => {
	return (
		<div className="change-num">
			{increase > 0 ? (
				<>
					<img src="./assets/icon-up.svg" alt="Increase" />
					<p className="increase">{`${increase} ${text}`}</p>
				</>
			) : (
				<>
					<img src="./assets/icon-down.svg" alt="Decrease" />
					<p className="decrease">{`${increase
						.toString()
						.replace('-', '')} ${text}`}</p>
				</>
			)}
		</div>
	);
};

export default ChangeNum;
