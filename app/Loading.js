import React from 'react';
import spinner from '../assets/spinner.svg';

const Loading = (props) => (
	<div className="divcall">
		<img src={spinner} alt="spinner" />
		<p>{props.message}</p>
	</div>
);

export default Loading;