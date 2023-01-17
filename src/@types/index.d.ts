// Application State
interface AppState {
	snackbar: {
		message: string;
		type: 'error' | 'success' | 'warning' | 'info';
		open: boolean;
		position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	};
	// Other states can be added here too
	// user: object
}

type SnackbarActionTypes = 'OPEN_SNACKBAR' | 'CLOSE_SNACKBAR';
// Can be extended to different Action Types as well
// eg type UserActionTypes = 'LOGIN' | 'LOGOUT';

interface SnackbarAction {
	type: SnackbarActionTypes;
	payload?: Partial<AppState['snackbar']>;
}
// Can be extended to different Actions for Specific Types
/**
 * eg:
 * interface UserAction {
 *	 type: UserActionTypes;
 *   payload: Partial<AppState['user']>;
 * }
 */

type AppActions = SnackbarAction;
// We could've the SnackbarAction directly,
// But with the above implementation, we can combine
// other ActionTypes together and export them as a single entity.

// eg: 
// type AppActions = SnackbarAction | UserAction

type DispatchContextType = React.Dispatch<AppActions>;
