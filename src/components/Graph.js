import React, { Component } from 'react'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'

const httpGet = {
	method: "GET",
	// mode: 'no-cors',
	headers: {
		Accept: "application/json",
		"content-type": "application/json; charset=UTF-8"
	},
}

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://app.conserv.io/data/api/health/db"

class Graph extends Component {
	constructor() {
		super()
		this.state = {
			readings: [],
			avg_temp1: []
		}
	}


	componentDidMount() {
		fetch(proxyurl + url, httpGet)
			.then(res => res.json())
			.then(data => {
				const dataArray = Object.values(data)
				let data2Array = [];
				dataArray.map((vals) => {
					const tempArr = Object.values(vals)
					console.log(tempArr)
					tempArr.map((val) => {
						// if (('key' in val) == "avg_temp1") {
							console.log(val);
						// }
					})
				})
				this.setState({ readings: data })
				console.log(this.state.readings)
			})
			.catch(err => console.log("there was an error"))
		// console.log(this.state.readings)

	}

	render() {
		return (
			<div className="content">
				<LineChart
					width={400}
					height={400}
					data={this.state.readings}
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
