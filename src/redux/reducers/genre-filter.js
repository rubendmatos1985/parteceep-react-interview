const genreFilterReducer = (state="all", { type })=>{
  switch(type){
    case 'SHOW_ANIMATION':
      return 'animation'
    case 'SHOW_COMEDY':
      return 'comedy'
    case 'SHOW_THRILLER':
     return 'thriller'
    case 'SHOW_ACTION':
      return 'action';
    case 'SHOW_ALL':
      return 'all'     
    default: return state
  }
}

export default genreFilterReducer;