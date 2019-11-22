import React, { Component } from 'react'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import '../styles/Style.css'
// import Colors from '../styles/GraphColors'

const httpGet = {
	method: "GET",
	// mode: 'no-cors',
	headers: {
		Accept: "application/json",
		"content-type": "application/json; charset=UTF-8"
	},
}

const Colors = {
	avg_dewpoint: "#6A8D73",
	avg_rh: "#DDFC74",
	avg_temp1: "#FF6978",
	avg_ir: "#FD5200",
	avg_temp2: "#93E1D8",
	avg_uv1: "#7353BA",
	avg_vis: "#757780",
	max_ir: "#AF3800",
	max_rh: "#AFFC41",
	max_temp1: "#F03A47",
	max_temp2: "#2D93AD",
	max_uv1: "#2F195F",
	max_vis: "#C0C5C1",
	min_ir: "#FE621D",
	min_rh: "#D3F9B5",
	min_temp1: "#FAC8CD",
	min_temp2: "#B1EDE8",
	min_uv: "#DFC2F2",
	min_vis: "#394648"
}


// console.log(Colors)
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://app.conserv.io/data/api/health/db";


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
				// console.log(dataArray[1])
			})
			.catch(err => console.log("there was an error"))

		console.log(this.val1 + this.val2 + this.val3 + this.color1 + this.color2 + this.color3)
	}

	render() {
		return (
			<div>
				<LineChart
					width={800}
					height={400}
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
