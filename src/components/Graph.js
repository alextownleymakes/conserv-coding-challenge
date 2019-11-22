import React, { Component } from 'react'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import '../styles/Style.css'
import Colors from '../styles/GraphColors'

const httpGet = {
	method: "GET",
	headers: {
		Accept: "application/json",
		"content-type": "application/json; charset=UTF-8"
	},
}

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://app.conserv.io/data/api/health/db";
const height = document.documentElement.clientHeight *.8;
const width = document.documentElement.clientWidth *.8;

class Graph extends Component {
	constructor({ val1, val2, val3, header }) {
		super()
		this.state = {
			readings: []
		}
		this.val1 = val1
		this.val2 = val2
		this.val3 = val3
		this.color1 = Colors[val1]
		this.color2 = Colors[val2]
		this.color3 = Colors[val3]
		this.header = header

	}

	componentDidMount() {
		fetch(proxyurl + url, httpGet)
			.then(res => res.json())
			.then(data => {
				const dataArray = Object.values(data)
				this.setState({ readings: dataArray })
			})
			.catch(err => console.log("there was an error"))
	}

	render() {
		return (
			<div>
				<LineChart
					width={width}
					height={height}
					data={this.state.readings}
					margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
					<XAxis dataKey="bucket" />
					<Tooltip />
					<CartesianGrid stroke="#000" />

					<Line type="monotone" dataKey={this.val1} stroke={this.color1} yAxisId={0} />
					<Line type="monotone" dataKey={this.val2} stroke={this.color2} yAxisId={1} />
					<Line type="monotone" dataKey={this.val3} stroke={this.color3} yAxisId={2} />

				</LineChart>
			</div>
		)
	}
}

export default Graph
