import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import '../styles/Style.css';

class Header extends Component {

	render() {
		return (
			<div className="container-fluid header">
				<div className="row">
					<div className="col-3 logoDiv">
						&nbsp;
					</div>
					<div className="col-9">
						<div className="navbar navbar-light bg-light navbar-expand-lg">
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item"><Link to="/temp1">TEMPERATURE</Link></li>&nbsp;&nbsp;•&nbsp;&nbsp;
                            <li class="nav-item"><Link to="/temp2">HIGH-PRECISION TEMPERATURE</Link></li>&nbsp;&nbsp;•&nbsp;&nbsp;
									<li className="nav-item"><Link to="/ir">INFRARED INDEX</Link></li>&nbsp;&nbsp;•&nbsp;&nbsp;
									<li className="nav-item"><Link to="/rh">RELATIVE HUMIDITY</Link></li>&nbsp;&nbsp;•&nbsp;&nbsp;
									<li className="nav-item"><Link to="/vis">LUX</Link></li>&nbsp;&nbsp;•&nbsp;&nbsp;
									<li className="nav-item"><Link to="/uv">UV INDEX</Link></li>&nbsp;&nbsp;•&nbsp;&nbsp;
									<li className="nav-item"><Link to="/dewpoint">DEWPOINT</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
