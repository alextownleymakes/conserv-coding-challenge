import React, { Component } from 'react'
import Content from './Content'


class Ir extends Component {
	constructor() {
		super()
		this.state = {
            val1: "max_ir",
            val2: "avg_ir",
            val3: "min_ir",
            header: "INFRARED INDEX"
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

export default Ir
