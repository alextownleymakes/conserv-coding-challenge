import React, { Component } from 'react'

class Footer extends Component {

	render() {
		return(
			
			<div className="container-fluid footer">
			<div className="push"></div>
				<div className="row">
					<div className="col-4 footerLogoDiv">
						&nbsp;<br></br>
					</div>
					<div className="col-2 footerdiv"></div>
					<div className="col-6 footerdiv">
						<h5>This display created by <a href="http://www.alextownleymakes.com" target="new">Alex Townley</a> for <a href="http://www.conserv.io" target="new">Conserv, Inc.</a></h5>

						<h5><a href="mailto:alextownleymakes@gmail.com">e-mail</a></h5>
						<h5><a href="http://www.github.com/alextownleymakes">github</a></h5>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
