import React, { Component } from 'react'
import Content from './Content'

class Rh extends Component {
	constructor() {
		super()
		this.state = {
            val1: "max_rh",
            val2: "avg_rh",
            val3: "min_rh",
            header: "RELATIVE HUMIDITY"
		}
	}

	render() {
		return (
			<div className="content">
                <Content val1={this.state.val1} val2={this.state.val2} val3={this.state.val3} header={this.state.header}/>
			</div>
		)
	}
}

export default Rh
