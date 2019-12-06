import React, {Component} from 'react';


class Result extends Component {
	render() {
		var resultStyle={
			width: "150px",
			height: "200px",
			textAlign: "center",
			backgroundColor: "grey"
		}
		return(
			<div style={resultStyle} className="result">
				<span>{this.props.name}</span>
			</div>
		);
	}

}

export default Result;