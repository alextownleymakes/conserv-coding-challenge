import React, { Component } from 'react'
import Content from './Content'


class Temp2 extends Component {
	constructor() {
		super()
		this.state = {
            val1: "max_temp2",
            val2: "avg_temp2",
            val3: "min_temp2",
            header: "HIGH PRECISION TEMPERATURE"
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

export default Temp2
