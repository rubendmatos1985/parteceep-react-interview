import React from 'react';
import styled from 'styled-components';
import { changeFilterValue } from '../redux/actions';
import { connect } from 'react-redux';

const Option = styled.option``;
const Select = styled.select`
	margin-right: 5vw;
	min-height: 30px;
	font-family: 'Oxygen', sans-serif;
	font-weight: bold;
	background: #175eb0;
	outline: none;
	border: none;
	color: white;
	font-size: 16px;
`;

const Filter = ({dispatch}) => {
  const handleOnChange = (event)=>{
    dispatch(changeFilterValue(event.target.value))
  }
  return (
		<Select onChange={handleOnChange}>
			<Option>All</Option>
			<Option>Comedy</Option>
			<Option>Action</Option>
			<Option>Thriller</Option>
			<Option>Animation</Option>
		</Select>
	);
};

export default  connect()(Filter);
