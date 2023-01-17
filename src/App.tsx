/**
 * App.tsx
 */

// Dependencies
import React, { useReducer } from 'react';
import reducer from './reducer/reducer';
import AppContext from './context/AppContext';
import DispatchContext from './context/DispatchContext';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Snackbar from './components/Snackbar';
import './css/app.css';

function App() {
	// useReducer with the reducer func from './reducer/reducer.ts'
	// The second arg is an initial value for the application state
	const [state, dispatch] = useReducer(reducer, {
		snackbar: {
			message: '',
			type: 'error',
			open: false,
			position: 'bottom-right',
		},
	});

	// state is passed into the app context
	// dispatch function is passed into the dispatch context
	return (
		<AppContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<div className='App'>
					<Navbar />
					<Main />
					<Footer />
					<Snackbar />
				</div>
			</DispatchContext.Provider>
		</AppContext.Provider>
	);
}

export default App;
