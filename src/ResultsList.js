import React, {Component} from 'react';
import Result from './Result.js';



class ResultsList extends Component {
	render() {
	    var listStyle = {
	    	display: "grid",
	    	gridTemplateColumns: "1fr 1fr 1fr",
	    	gridGap: "15px",
	    	padding: "0",
	    	listStyleType: "none",
	    	justifyContent: "space-evenly"
	    }
		return(
			<div>
				<div id="results">
					<header className="header">
						<h3>Results</h3>
					</header>
					<ul style={listStyle}>
						{this.props.results.map(result => 
							<li key={result.id}>
								<Result title={result.title} overview={result.overview} backdrop={result.backdrop_path}/>
							</li>
						)}
					</ul>
				</div>
				<div id="results2">
					<header className="header">
						<h3>Results</h3>
					</header>				
					<ul style={listStyle}>
						{this.props.results2.map(result2 => 
							<li key={result2.id}>
								<Result title={result2.title} overview={result2.overview} backdrop={result2.backdrop_path}/>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}

}

export default ResultsList;