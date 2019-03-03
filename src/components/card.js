import React, {  useState } from 'react';
import styled from 'styled-components';
import Icon from './icon';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions';
import Stars from './stars';
const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
	justify-content: start;
	align-items: center;
	width: 100%;
	max-width: 400px;
  height: ${ props => props.height ? props.height : "auto" };
	&:hover{
    box-shadow: 2px 5px 15px 2px black;
		cursor: pointer;

	}
`;

const Header = styled.div`
	font-family: 'Oxygen', sans-serif;
	font-weight: bold;
	font-size: 20px;
	background: #b0173b;
	color: white;
	width: 100%;
	height: 30%;
	display: flex;
	align-items: start;
	justify-content: center;

`;

const Body = styled.div`
	display: flex;
	font-family: 'Oxygen', sans-serif;
	font-size: 19px;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: #061526;
	color: whitesmoke;
	width: 100%;
	height: 80%;
`

const Text = styled.div`
  margin-left: 5px;
  `

const Button = styled.button`
  background:  ${ props => props.background };
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
	&:hover{
		cursor: pointer;
	}
`
const Title = styled.h4`
 margin-left: 5px;
`;
const Card = ({ dispatch, itemId, title, likes, dislikes, category }) => {
	const [ buttonStatus, setButtonStatus ] = useState(true);
	const handleClick = ()=>(
    setButtonStatus(!buttonStatus)
    /** FROM HERE I CAN DISPATCH AN ACTION 
     OR UPDATE THE DATABASE WITH LIKE OR DISLIKE **/
	)
	const handleDeleteItem = ()=>(
		dispatch(deleteItem(itemId))
	)
  return (
		<Container column height="250px">
			<Header>
			  <Title>{title}</Title>
			
			</Header>
			<Body>
				<Text>Genre: {category}</Text>
				<Stars likes={likes} dislikes={dislikes}/>	
			</Body>
			<Container >
				<Button 
				background="#175eb0"
				onClick={handleClick}>
        {
          buttonStatus 
          ? <Icon className="fas fa-thumbs-up"/>
          : <Icon className="fas fa-thumbs-down"/>
        }</Button>
				<Button 
				 onClick={ handleDeleteItem }
				 background="#c90227">
				 <Icon className = "far fa-trash-alt"/>	
				</Button>
			</Container>
		</Container>
	);
};

export default connect()(Card);
