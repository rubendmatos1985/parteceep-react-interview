const initialState = {
	moviesList: [],
};

const moviesReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case 'DELIVERING_DATA':
			return { moviesList: payload };
		case 'DELETE_ITEM':
			return {
        ...state, 
        moviesList: state.moviesList.filter(item => parseInt(item.id) !== parseInt(payload))
      };
			
		default: return state
    
  };
}

export default moviesReducer;
