import { createContext } from 'react';

const DispatchContext = createContext<DispatchContextType>(
	{} as DispatchContextType
);

export default DispatchContext;
