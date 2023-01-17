/**
 * Snackbar Component
 */

// Dependencies
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import DispatchContext from '../context/DispatchContext';
import '../css/snackbar.css';

// Can be added as a state to snackbar too!
const AUTO_CLOSE_SNACKBAR_TIME = 6000;

const Snackbar = () => {
	// Get the snackbar state and the dispatch function
	// using the useContext Hook
	const { snackbar } = useContext<AppState>(AppContext);
	const dispatch = useContext<DispatchContextType>(DispatchContext);

	// When snackbar is open, close it after the auto close time
	/**
	 *! This is a very raw approach!
	 *? A better implementation would've been
	 *? to batch each snackbar dispatched
	 * */
	if (snackbar.open) {
		setTimeout(() => {
			dispatch({ type: 'CLOSE_SNACKBAR' });
		}, AUTO_CLOSE_SNACKBAR_TIME);
	}

	return (
		<div
			// Setting the position and the
			// type from the state
			className={`snackbar ${snackbar.position}`}
			style={{
				display: snackbar.open ? 'flex' : 'none',
				backgroundColor: `var(--${snackbar.type}-bg)`,
			}}
		>
			<p>{snackbar.message}</p>
			{/* Dispatch close snackbar when the close button is clicked */}
			<button onClick={() => dispatch({ type: 'CLOSE_SNACKBAR' })}>
				✖️
			</button>
		</div>
	);
};

export default Snackbar;
