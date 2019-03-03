import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Movies from './components/movies';
import Header from './components/header';
import Footer from './components/footer';
import {  fetchMovies } from './redux/actions';
import GlobalStyle  from './components/global-style';
import Paginator from './components/paginator';


class App extends Component {
	componentDidMount(){
    store.dispatch(fetchMovies())
	}
	render() {
		return (
			<Fragment>
				<GlobalStyle/>
				<Header/>
				<Movies/>
				<Paginator/>
				<Footer/>
			</Fragment>
		);
	}
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
