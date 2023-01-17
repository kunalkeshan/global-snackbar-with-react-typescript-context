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
	const [input, setInput] = useState('This is a message!');
	const dispatch = useContext<DispatchContextType>(DispatchContext);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSnackbarColor = (type: AppState['snackbar']['type']) => {
		dispatch({
			payload: { message: input, type: type },
			type: 'OPEN_SNACKBAR',
		});
	};

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
