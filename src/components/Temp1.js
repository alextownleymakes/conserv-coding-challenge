import React, { Component } from 'react'
import Content from './Content'

class Temp1 extends Component {
    constructor() {
		super()
		this.state = {
            val1: "max_temp1",
            val2: "avg_temp1",
            val3: "min_temp1",
            header: "TEMPERATURE"
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

export default Temp1
