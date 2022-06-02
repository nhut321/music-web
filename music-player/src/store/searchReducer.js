

const searchReducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH' :
			return {
				...state, 
				searchInput: action.input, 
				searchResult: {
					...state.searchResult,
					data: action.payload
				} 
			}
		case 'PLAY' :
			return {
				...state,
				isPlay: true, 
			}
	}
}

export default searchReducer