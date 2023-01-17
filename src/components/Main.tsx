/**
 * Main Component
 */

// Dependencies
import React, { useContext, useState } from 'react';
import DispatchContext from '../context/DispatchContext';
import '../css/main.css';

const snackbarTypes = ['Success', 'Error', 'Warning', 'Info'];

const snackbarPositions = [
	'Top Right',
	'Top Left',
	'Bottom Right',
	'Bottom Left',
];

const Main = () => {
	// Input State and Dispatch function using useContext
	const [input, setInput] = useState('This is a message!');
	const dispatch = useContext<DispatchContextType>(DispatchContext);

	// Handle changes in the input
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	// Open the snackbar when the button is clicked
	// The type of snackbar is manipulated here
	const handleSnackbarColor = (type: AppState['snackbar']['type']) => {
		dispatch({
			payload: { message: input, type: type },
			type: 'OPEN_SNACKBAR',
		});
	};

	// Open the snackbar when the button is clicked
	// The position of snackbar is manipulated here
	const handleSnackbarPosition = (value: string) => {
		const position = value
			.toLowerCase()
			.replace(' ', '-') as AppState['snackbar']['position'];
		dispatch({
			type: 'OPEN_SNACKBAR',
			payload: { message: input, position },
		});
	};

	return (
		<main>
			<div className='container'>
				<input
					type='text'
					placeholder='Snackbar message...'
					className='main__input'
					value={input}
					onChange={handleInput}
				/>
				<ul className='main__list'>
					{snackbarTypes.map((item, idx) => (
						<li
							key={idx}
							style={{
								backgroundColor: `var(--${item.toLowerCase()}-bg)`,
							}}
							onClick={() =>
								handleSnackbarColor(
									item.toLowerCase() as AppState['snackbar']['type']
								)
							}
						>
							{item}
						</li>
					))}
				</ul>
				<ul className='position__list'>
					{snackbarPositions.map((item, idx) => (
						<li
							key={idx}
							onClick={() => handleSnackbarPosition(item)}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default Main;
