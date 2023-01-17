import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import DispatchContext from '../context/DispatchContext';
import '../css/snackbar.css';

const AUTO_CLOSE_SNACKBAR_TIME = 6000;

const Snackbar = () => {
	const { snackbar } = useContext<AppState>(AppContext);
	const dispatch = useContext<DispatchContextType>(DispatchContext);
	console.log(snackbar);
	if (snackbar.open) {
		setTimeout(() => {
			dispatch({ type: 'CLOSE_SNACKBAR' });
		}, AUTO_CLOSE_SNACKBAR_TIME);
	}

	return (
		<div
			className={`snackbar ${snackbar.position}`}
			style={{
				display: snackbar.open ? 'flex' : 'none',
				backgroundColor: `var(--${snackbar.type}-bg)`,
			}}
		>
			<p>{snackbar.message}</p>
			<button onClick={() => dispatch({ type: 'CLOSE_SNACKBAR' })}>
				✖️
			</button>
		</div>
	);
};

export default Snackbar;
