import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from './card';
import styled from 'styled-components';


const Section = styled.section`
	grid-area: content;
	width: 100%;
	height: 1fr;
  display: flex;
	justify-content: center;
	align-items: center; 
	

`;

const ListContainer = styled.div`
  grid-area: list;
	display: grid;
	grid-area: content;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	
	grid-column-gap: 3px;
	grid-row-gap: 10px;
	width: 80%;
  
`;

const MoviesContainer = ({ movies, filter, paginator }) => {
	const startPage = 	(paginator.currentPage - 1) * paginator.itemsPerPage;
	const endPage = paginator.itemsPerPage * paginator.currentPage
	const slicedMovies = sliceArray(movies)(startPage, endPage) 
  return (
		<Section>
			<ListContainer>
				{slicedMovies ? (
					slicedMovies.map(({ id, category, title, likes, dislikes }) => (
						<Card
							itemId={id}
							key={id}
							title={title}
							category={category}
							dislikes={dislikes}
							likes={likes}
						/>
					))
				) : (
					<div>Loading...</div>
				)}
			</ListContainer>
		</Section>
	);
};

// Map State To Props
const mapState = ({ movies, filter, paginator }) => ({ 
	movies: movies.moviesList.length > 0 ? filterByValue(movies.moviesList, filter) : [],
	filter, 
	paginator });
export default connect(mapState)(MoviesContainer);



// Helper Functions

// Pure Functions

const filterByValue = (moviesArray, filterValue) =>
	filterValue === 'all' ? moviesArray : moviesArray.filter((movie) => movie.category.toLowerCase() === filterValue);

const sliceArray = (array) => (start, end) => array.slice(start, end);
