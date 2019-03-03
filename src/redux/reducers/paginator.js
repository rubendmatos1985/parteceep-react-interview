// I USED HERE SOME FUNCTIONAL CONCEPTS THAT'S WHY I IMPORTED RAMDA
import * as R from 'ramda';

const initState = {
	itemsPerPage: 12,
	amountOfPages: 1,
	maxOfItemsPerPage: 12,
	minOfItemsPerPage: 4,
	totalOfItems: 0,
	currentPage: 1
};
const paginatorReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case 'DELIVERING_DATA':
			return {
				...state,
				totalOfItems: payload.length
			};
		case 'CHANGE_ITEM_PER_PAGE': {
			const increaseItemsPerPageFunction = increaseIfCondition(state, 4, 'itemsPerPage');
			const decreaseItemsPerPageFunction = decreaseIfCondition(state, 4, 'itemsPerPage');
			const increaseOrDecrease = takePayloadAndCheck(payload, 'increase');
			const increaseItemsPerPage = R.compose(
				resetCurrentPageNumber,
				updateAmountOfPages,
				increaseItemsPerPageFunction,
				ifIsMinorThanMaxLimit
			)(state);
			const decreaseItemsPerPage = R.compose(
				resetCurrentPageNumber,
				updateAmountOfPages,
				decreaseItemsPerPageFunction,
				ifIsGreaterThanMinLimit
			)(state);

			return increaseOrDecrease(increaseItemsPerPage, decreaseItemsPerPage);
		}
		case 'DELETE_ITEM':{
			const newState = { ...state, totalOfItems: state.totalOfItems -1 }
			return updateAmountOfPages(newState)
		}
		case 'CHANGE_PAGE': {
			const nextPageFunction = increaseIfCondition(state, 1, 'currentPage');
			const lastPageFunction = decreaseIfCondition(state, 1, 'currentPage');
			const nextOrLastPage = takePayloadAndCheck(payload, 'next');
			const nextPage = R.compose(nextPageFunction, nextPageIsMinorThanLimit)(state);
			const lastPage = R.compose(lastPageFunction, lastPageIsGreaterThanOne)(state);
			return nextOrLastPage(nextPage, lastPage);
		}
		default:
			return state;
	}
};
export default paginatorReducer;

//---------------------------------- HELPER FUNCTIONS

//------------------ PURE FUNCTIONS 


// REUSABLE FUNCTION ->: WATCH IF PAYLOAD IS INCREASE OR DECREASE
// AND LAUNCH A FUNCTION IN EACH CASE
//
const takePayloadAndCheck = (payload, value) => (fnIfIncrease, fnIfDecrease) =>
	payload === value ? fnIfIncrease : fnIfDecrease;

// TRUE IF THE CURRENT NUMBER IS GREATER THAN 4

const ifIsGreaterThanMinLimit = (state) => state.itemsPerPage > state.minOfItemsPerPage;

// TRUE IF THE CURRENT NUMBER IS MINOR THAN 12

const ifIsMinorThanMaxLimit = (state) => state.itemsPerPage < state.maxOfItemsPerPage;

//REUSABLE FUNCTION ->: IF CONDITION IS TRUE
// TAKE AN INTERVAL AND SUM TO THE VALUE
const increaseIfCondition = (state, interval, value) => (boolean) =>
	boolean
		? {
				...state,
        [value]: state[value] + interval,
       
			}
		: state;

//REUSABLE FUNCTION -> : IF CONDITION IS TRUE
// TAKE AN INTERVAL AND REST TO THE VALUE

const decreaseIfCondition = (state, interval, value) => (boolean) =>
	boolean
		? {
				...state,
        [value]: state[value] - interval,
        
			}
		: state;

//UPDATE AMOUNT OF PAGES DINAMICALLY

const updateAmountOfPages = (state) => ({
	...state,
	amountOfPages: Math.ceil(state.totalOfItems / state.itemsPerPage)
});
const resetCurrentPageNumber = (state)=>({
	...state,
	currentPage: 1
})

// NEXT NUMBER PAGE IS MINOR THAN AMOUNT OF PAGES

const nextPageIsMinorThanLimit = (state) => state.currentPage + 1 <= state.amountOfPages;

// LAST NUMBER PAGE IS GREATER THAN 1
const lastPageIsGreaterThanOne = (state) => state.currentPage - 1 >= 1;

