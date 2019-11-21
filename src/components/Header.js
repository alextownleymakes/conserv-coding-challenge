import React, { Component } from 'react'
import '../styles/Style.css';

class Header extends Component {
	constructor() {
		super()

	}


	render() {
		return (
			<div className="container-fluid header">
				<div className="row">
					<div className="col-4 logoDiv">
						&nbsp;
					</div>
					<div className="col-2"></div>
					<div className="col-6"></div>
				</div>
			</div>
		)
	}
}

export default Header
