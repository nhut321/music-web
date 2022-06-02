import { createContext, useReducer } from 'react'
import searchReducer from '../store/searchReducer'
import { searchState } from '../store/initState'

export const appContext = createContext()

function AppContextProvider({children}) {
	const [state, dispatch] = useReducer(searchReducer,searchState)


	const data = {
		state,
		dispatch
	}
	return (
		<appContext.Provider value={data}>
			{children}
		</appContext.Provider>
	)
}

export default AppContextProvider