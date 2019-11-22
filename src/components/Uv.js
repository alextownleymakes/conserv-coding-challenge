import React, { Component } from 'react'
import Content from './Content'


class Uv extends Component {
	constructor() {
		super()
		this.state = {
            val1: "max_uv1",
            val2: "avg_uv1",
            val3: "min_uv1",
            header: "UV INDEX"
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

export default Uv
