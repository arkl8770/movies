import React, {Component} from 'react';
import './App.css';

class Result extends Component {
	render() {
		var imageUrl;
		if(this.props.backdrop === null)
		{
			imageUrl = '../public/noImage.png';
		}
		else
		{
			imageUrl = "http://image.tmdb.org/t/p/w342" + this.props.backdrop;
		}

		var resultStyle={
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-end",
			height: "200px",
			textAlign: "center",
			border: "1px solid black",
			borderRadius: "5px",
			backgroundImage: "url('" + imageUrl + "')",
			color: "white",
			backgroundColor: "gray"
		}
		var titleStyle={
			width: "100%",
			alignSelf: "flex-end",
			fontSize: "1.1em",
			marginTop: "10px",
			padding: "0 5px",
			marginBottom: "10px"
		}
		var overviewStyle={
			padding: "0 5px",
			maxHeight: "75px",
			alignSelf: "flex-end",
			overflow: "hidden",
			fontSize: ".8em",
			fontStyle: 'italic'
		}
		return(
			<div className="movieResults">
				<div style={resultStyle} className="result"></div>
				<div style={titleStyle}>{this.props.title}</div>
				<div style={overviewStyle}>{this.props.overview}</div>
			</div>
		);
	}

}

export default Result;