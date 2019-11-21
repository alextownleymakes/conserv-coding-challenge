import React, { Component } from 'react'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'

const httpGet = {
	method: "GET",
	mode: 'no-cors',
	headers: {
		Accept: "application/json",
		"content-type": "application/json; charset=UTF-8"
	},
}

class Graph extends Component {
	constructor() {
		super()
		this.state = {
			readings: [],
		}
	}


	componentDidMount() {
		fetch("https://app.conserv.io/data/api/health/db", httpGet)
			.then(res => res.json())
			.then(data => {
				const dataArray = Object.values(data)
				this.setState({ readings: dataArray })
				console.log(this.state.readings)
			})
	}

	render() {
		return (
			<div className="content">
				<LineChart
					width={400}
					height={400}
					data={this.readings}
					margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
					<XAxis dataKey="name" />
					<Tooltip />
					<CartesianGrid stroke="#000" />
					<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
					<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
				</LineChart>
			</div>
		)

	}
}

export default Graph
