import React, { Component } from 'react'
import Content from './Content'

class Dewpoint extends Component {
	constructor() {
		super()
		this.state = {
            val1: "avg_dewpoint",
            val2: "",
            val3: "",
            header: "DEWPOINT"
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

export default Dewpoint
