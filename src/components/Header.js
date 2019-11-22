import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import '../styles/Style.css';

const logoLink = {
	display: "block", height: "100%"
}

class Header extends Component {

	render() {
		return (
			<div className="container-fluid header">
				<div className="row squish">
					<div className="col-3 logoDiv" onclick="location.href='/'">
						<a style={logoLink} href="/"></a>
					</div>
					<div className="col-9">
						<div className="navbar navbar-light bg-light navbar-expand-lg">
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item"><Link className="nav-link" to="/temp1">TEMPERATURE</Link></li>
                            <li class="nav-item"><Link className="nav-link" to="/temp2">HIGH-PRECISION TEMPERATURE</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/ir">INFRARED INDEX</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/rh">RELATIVE HUMIDITY</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/vis">LUX</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/uv">UV INDEX</Link></li>
									<li className="nav-item"><Link className="nav-link" to="/dewpoint">DEWPOINT</Link></li>
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
