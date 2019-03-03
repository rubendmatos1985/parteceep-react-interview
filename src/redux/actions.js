import { movies$ as movies } from  '../../data/movies';
export const fetchMovies = ()=>{
  return async (dispatch, getState)=>{
    dispatch({ type: 'FETCHING_DATA' })
    const fetchedMovies = await movies;
    return await dispatch({ type: 'DELIVERING_DATA', payload: fetchedMovies })
  }
}

export const toogleButtonLike = ()=>({
  type: "TOOGLE_BUTTON_LIKE"
})

export const changeFilterValue = (value)=>({
  type: `SHOW_${value.toUpperCase()}`
})

export const deleteItem = (itemId )=>({
  type: 'DELETE_ITEM',
  payload: itemId
})

export const changeItemsPerPage = direction =>({
  type: 'CHANGE_ITEM_PER_PAGE',
  payload: direction
})

export const changePage = (payload)=>({
  type: 'CHANGE_PAGE',
  payload
})