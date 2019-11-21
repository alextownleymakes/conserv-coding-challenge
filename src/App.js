import React, { Component } from 'react';
import './styles/App.css';
import './styles/Style.css';
import Header from './components/Header'
import Graph from './components/Graph'
import Footer from './components/Footer'

class App extends Component {


	render() {
		return(
			<div className="container-fluid no-padding wrapper">
				<Header />
				<Graph />
				<Footer />
			</div>
		)

	}
}

export default App;
