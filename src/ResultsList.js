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
		);
	}

}

export default ResultsList;