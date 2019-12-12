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
 			year: 0,
 			title: "",
 			actor: "",
 			genre: "",
 			rating: 0
 		};

 		this.searchByTitle = this.searchByTitle.bind(this);

 		//this.searchByYear = this.searchByYear.bind(this);

 		this.discoverSearch = this.discoverSearch.bind(this);


 		this.handleTitleChange = this.handleTitleChange.bind(this);
 		this.handleYearChange = this.handleYearChange.bind(this);
 		this.handleRatingChange = this.handleRatingChange.bind(this);
 		this.handleGenreChange = this.handleGenreChange.bind(this);
 	}
		//fetch("https://api.themoviedb.org/3/search/movie?api_key=", key, "&language=en-US&query=", this.state.movie ,"&page=1&include_adult=false")



 	//searchByYear() {
	searchByTitle() {


		const key = "706733eb15b955d867b9853c3b840e78";
		fetch("https://api.themoviedb.org/3/search/movie?api_key=" +  
			key +
			"&language=en-US&query=" + 
			this.state.title +
			"&page=1&include_adult=false"
		)
		.then(response => response.json())
		.then((responseJson) => {
			this.setState({ results: responseJson.results });
			// console.log(responseJson.results);
			document.getElementById("results").scrollIntoView();
		})
		.catch(error => console.log(error));
	}

 	discoverSearch() {

 		var year = false;
 		var rating = false;
 		var genre = false;

		if (this.state.genre !== 0) {
 			genre = true
 		}
 		if (this.state.year !== "") {
 			year = true;
 		} 
 		if (this.state.rating !== "") {
 			rating = true;
 		} 


 		const key = "706733eb15b955d867b9853c3b840e78";


 		var url = "https://api.themoviedb.org/3/discover/movie?api_key=" + 
			key +
			"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

		if (genre === true) {
			url += "&with_genres=" + this.state.genre;
		}
		if (rating === true) {
			url += "&vote_average.gte=" + this.state.rating;
		}
		if (year === true) {
			url += "&year=" + this.state.year;
		}

		alert(url);

		fetch(url)
		.then(response => response.json())
		.then((responseJson) => {
			this.setState({ results: responseJson.results });

			// console.log(responseJson.results);
		})
		.catch(error => console.log(error));

		console.log(this.state.results);
	}
	// searchBuild() {
		
	// }

	handleYearChange(year) {
		this.setState({ year: year });	
	}

	handleTitleChange(title) {
		this.setState({ title: title });
	}


	handleRatingChange(rating) {
		this.setState({ rating: rating });
	}

	handleGenreChange(genre) {
		this.setState({ genre: genre });
	}

 	render() {
		return (
		    <div className="App">
		    	<header className="header">
		    		<h1>Welcome to Movie Matchmaker.</h1>
		    	</header>


		    	<SearchForm 
		    	handleTitleChange={this.handleTitleChange}
		    	handleActorChange={this.handleActorChange}
		    	handleYearChange={this.handleYearChange} 
		    	handleGenreChange={this.handleGenreChange}

		    	searchByTitle={this.searchByTitle} 
		    	discoverSearch={this.discoverSearch} 


		    	title={this.state.title}
		    	actor={this.state.actor}/>


		    	<ResultsList results={this.state.results} />
		    </div>
		);
	}
}

export default App;
