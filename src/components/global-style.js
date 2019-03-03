import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body, #root{
	padding: 0;
	margin: 0;
	width: 100%;

}
 body{
	 @import url('https://fonts.googleapis.com/css?family=Oxygen');
	 display: flex;
	 justify-content: center;
	 align-items: center; 
	 }
 #root{
	 width: 100%;
	 height: 100vh;
	 display: grid;
   grid-template-areas: 
	  "header header header"
		"content content content"
		"content content content"
		"paginator paginator paginator "
		"footer footer footer";
		
	grid-row-gap: 10px;
 }
`;