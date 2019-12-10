import React, {Component} from 'react';


class Result extends Component {
	render() {
		var imageUrl = "http://image.tmdb.org/t/p/w342" + this.props.backdrop;
		var resultStyle={
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-end",
			height: "200px",
			textAlign: "center",
			border: "1px solid black",
			borderRadius: "5px",
			backgroundImage: "url('" + imageUrl + "')",
			color: "white"
		}
		var titleStyle={
			width: "100%",
			alignSelf: "flex-end",
			fontSize: "1.1em",
			marginTop: "10px"
		}
		var overviewStyle={
			padding: "0 5px",
			maxHeight: "75px",
			alignSelf: "flex-end",
			overflow: "hidden",
			fontSize: ".8em"
		}
		return(
			<div style={resultStyle} className="result">
				<div style={overviewStyle}>{this.props.overview}</div>
				<div style={titleStyle}>{this.props.title}</div>
			</div>
		);
	}

}

export default Result;