import React, {Component} from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import ResultsList from './ResultsList.js';
// import movieSearch from './movieSearch.js';


 class App extends Component {
 	constructor() {
 		super();
 		this.state = {
 			results: [],
 			year: 0
 		};

 		this.searchByYear = this.searchByYear.bind(this);
 		this.handleYearChange = this.handleYearChange.bind(this);
 	}

 	searchByYear() {

		const key = "706733eb15b955d867b9853c3b840e78";

		fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + 
			key +
			"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=" +
			this.state.year)
		.then(response => response.json())
		.then((responseJson) => {
			this.setState({ results: responseJson.results });
			// console.log(responseJson.results);
		})
		.catch(error => console.log(error));

		// console.log(this.state.results);
	}

	searchByMovie() {

		const key = "706733eb15b955d867b9853c3b840e78";
		fetch("https://api.themoviedb.org/3/search/movie?api_key=", key, "&language=en-US&query=", this.state.movie ,"&page=1&include_adult=false")
		.then(response => response.json())
		.then((responseJson) => {
			this.setState({ results: responseJson.results });
		})
		.catch(error => console.log(error));
	}

	// searchBuild() {
		
	// }


	handleYearChange(year) {
		this.setState({ year: year });
		
	}

 	render() {
		return (
		    <div className="App">
		    	<header className="header">
		    		<h1>Welcome to Movie Matchmaker.</h1>
		    	</header>

		    	<SearchForm searchByYear={this.searchByYear} handleYearChange={this.handleYearChange} />

		    	<ResultsList results={this.state.results} />
		    </div>
		);
	}
}

export default App;
