/**
 * Reducer Function
 */

// Dependencies
import React from 'react';

const reducer = (state: AppState, action: AppActions) => {
	switch (action.type) {
		// When snackbar is open, 
		// - spread the previous value
		// - spread the payload (override prev values) 	   
		// - set open to true
		case 'OPEN_SNACKBAR': {
			state.snackbar = {
				...state.snackbar,
				...action.payload,
				open: true,
			};
			return { ...state };
		}
		// When snackbar is close
		//  - set open to false
		case 'CLOSE_SNACKBAR': {
			state.snackbar.open = false;
			return { ...state };
		}
		default: {
			return { ...state };
		}
	}
};

export default reducer;
