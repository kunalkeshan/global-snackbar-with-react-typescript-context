import { createContext } from 'react';

const AppContext = createContext<AppState>({} as AppState);

export default AppContext;
