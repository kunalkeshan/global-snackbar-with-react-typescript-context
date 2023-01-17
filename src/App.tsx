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
	const [state, dispatch] = useReducer(reducer, {
		snackbar: {
			message: '',
			type: 'error',
			open: false,
			position: 'bottom-right',
		},
	});
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
