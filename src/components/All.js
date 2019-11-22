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


class All extends Component {
	constructor() {
		super()
		this.state = {
			readings: []
		}

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
				<div className="container content-container">
					<div className="row">
						<div className="col-12 content-header">
							<center>
								<h1>ALL DATA</h1>
								<h6><i>CLICK LINKS ABOVE FOR DATA BY CATEGORY</i></h6>
							</center>
						</div>
					</div>
					<div className="row">
						<div className="col-2"></div>
						<div classname="col-8"></div>
						<LineChart
							width={width}
							height={height}
							data={this.state.readings}
							margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
						>
							<XAxis dataKey="bucket" />
							<Tooltip />
							<CartesianGrid stroke="#000" />

							<Line type="monotone" dataKey="max_temp1" stroke={Colors.max_temp1} yAxisId={0} />
							<Line type="monotone" dataKey="avg_temp1" stroke={Colors.avg_temp1} yAxisId={1} />
							<Line type="monotone" dataKey="min_temp1" stroke={Colors.min_temp1} yAxisId={2} />
							<Line type="monotone" dataKey="max_temp2" stroke={Colors.max_temp2} yAxisId={3} />
							<Line type="monotone" dataKey="avg_temp2" stroke={Colors.avg_temp2} yAxisId={4} />
							<Line type="monotone" dataKey="min_temp2" stroke={Colors.min_temp2} yAxisId={5} />
							<Line type="monotone" dataKey="max_ir" stroke={Colors.max_ir} yAxisId={6} />
							<Line type="monotone" dataKey="avg_ir" stroke={Colors.avg_ir} yAxisId={7} />
							<Line type="monotone" dataKey="min_ir" stroke={Colors.min_ir} yAxisId={8} />
							<Line type="monotone" dataKey="max_uv1" stroke={Colors.max_uv1} yAxisId={9} />
							<Line type="monotone" dataKey="avg_uv1" stroke={Colors.avg_uv1} yAxisId={10} />
							<Line type="monotone" dataKey="min_uv1" stroke={Colors.min_uv1} yAxisId={11} />
							<Line type="monotone" dataKey="max_rh" stroke={Colors.max_rh} yAxisId={12} />
							<Line type="monotone" dataKey="avg_rh" stroke={Colors.avg_rh} yAxisId={13} />
							<Line type="monotone" dataKey="min_rh" stroke={Colors.min_rh} yAxisId={14} />
							<Line type="monotone" dataKey="max_vis" stroke={Colors.max_vis} yAxisId={15} />
							<Line type="monotone" dataKey="avg_vis" stroke={Colors.avg_vis} yAxisId={16} />
							<Line type="monotone" dataKey="min_vis" stroke={Colors.min_vis} yAxisId={17} />
							<Line type="monotone" dataKey="avg_dewpoint" stroke={Colors.avg_dewpoint} yAxisId={18} />


						</LineChart>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		)

	}
}

export default All
