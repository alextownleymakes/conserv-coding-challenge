import React, { Component } from 'react'
import Content from './Content'


class Vis extends Component {
	constructor() {
		super()
		this.state = {
            val1: "max_vis",
            val2: "avg_vis",
            val3: "min_vis",
            header: "LUX"
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

export default Vis
