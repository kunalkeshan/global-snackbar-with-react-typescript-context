interface AppState {
	snackbar: {
		message: string;
		type: 'error' | 'success' | 'warning' | 'info';
		open: boolean;
		position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	};
}

type SnackbarActionTypes = 'OPEN_SNACKBAR' | 'CLOSE_SNACKBAR';

interface SnackbarAction {
	type: SnackbarActionTypes;
	payload?: Partial<AppState['snackbar']>;
}

type AppActions = SnackbarAction;

type DispatchContextType = React.Dispatch<AppActions>;
