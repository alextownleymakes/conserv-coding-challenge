import React, { Component } from 'react'
import Graph from './Graph'

class Temp1 extends Component {
    constructor({ val1, val2, val3, header }) {
        super()
        this.state = {
            val1: val1,
            val2: val2,
            val3: val3,
            header: header
        }
    }

    render() {
        return (
			<div>
				<div className="container content-container">
					<div className="row">
						<div className="col-12 content-header">
							<center>
								<h1>{this.state.header}</h1>
							</center>
						</div>
					</div>
					<div className="row">
						<div className="col-2"></div>
						<div classname="col-8"></div>
                        <Graph val1={this.state.val1} val2={this.state.val2} val3={this.state.val3}/>
                        </div>
					<div className="col-2"></div>
				</div>
			</div>
        )
    }
}

export default Temp1
