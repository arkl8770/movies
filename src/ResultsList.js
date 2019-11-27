import React, {Component} from 'react';
import Result from './Result.js';




class ResultsList extends Component {
	render() {
		const results = [
	      { key: 0,
	        name: "Movie1"
	      },
	      { key: 1,
	        name: "Movie2"
	      },
	      { key: 2,
	        name: "Movie3"
	      },
	      { key: 3,
	        name: "Movie4"
	      }
	    ];
	    var resultsStyle = {
	    	padding: "0",
	    	listStyleType: "none",
	    	display: "flex",
	    	justifyContent: "space-evenly"
	    		    }
	    var liStyle = {
	    }
		return(
			<div id="results">
				<header className="header">
					<h3>Results</h3>
				</header>
				<ul style={resultsStyle}>
					{results.map(result => 
						<li style={liStyle} key="result.key">
							<Result name={result.name} />
						</li>
					)}
				</ul>
			</div>
		);
	}

}

export default ResultsList;