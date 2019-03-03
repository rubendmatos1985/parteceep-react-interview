import React from 'react';
import styled from 'styled-components';
import Icon from './icon';
import { connect } from 'react-redux';
import { changeItemsPerPage, changePage } from '../redux/actions';
const Container = styled.div`
	grid-area: paginator;
	width: ${(props) => props.width};
	display: flex;
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
	justify-content: center;
	align-items: center;
`;
const PaginatorContainer = styled.div`
	width: 60%;
	padding: 5px;
	height: 70px;
	background: #175eb0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Oxygen', sans-serif;
	color: white;
`;

const Paginator = ({ dispatch, currentPage, amountOfPages, itemsPerPage }) => {
	const handleIncreaseItemsPerPage = () => dispatch(changeItemsPerPage('increase'));
	const handleDecreaseItemsPerPage = () => dispatch(changeItemsPerPage('decrease'));
  const handleNextPage = () => dispatch(changePage('next'))
  const handleLastPage = ()=> dispatch(changePage('last'))
  return (
		<Container width="100%">
			<PaginatorContainer>
				<Icon className="fas fa-backward" 
        onClick={ handleLastPage }
        />
				<Container>
					{currentPage} / {amountOfPages}
				</Container>
        <Icon 
        onClick={ handleNextPage }
        className="fas fa-forward" />
				<Container>Items per Page: {itemsPerPage}</Container>
				<Container column width="20%">
					<Icon onClick={handleIncreaseItemsPerPage} className="fas fa-chevron-up" />
					<Icon onClick={handleDecreaseItemsPerPage}  className="fas fa-chevron-down" />
				</Container>
			</PaginatorContainer>
		</Container>
	);
};

const mapState = ({ paginator }) => ({
	currentPage: paginator.currentPage,
	amountOfPages: paginator.amountOfPages,
	itemsPerPage: paginator.itemsPerPage
});

export default connect(mapState)(Paginator);
