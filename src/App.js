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
 			actor: ""
 		};

 		this.searchByTitle = this.searchByTitle.bind(this);

 		//this.searchByYear = this.searchByYear.bind(this);

 		this.discoverSearch = this.discoverSearch.bind(this);


 		this.handleTitleChange = this.handleTitleChange.bind(this);
 		this.handleYearChange = this.handleYearChange.bind(this);
 		this.handleActorChange = this.handleActorChange.bind(this);
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

 		if (this.state.year != "") {
 			year = true;
 		} 
		const key = "706733eb15b955d867b9853c3b840e78";
 		

 		var url = "https://api.themoviedb.org/3/discover/movie?api_key=" + 
			key +
			"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
		console.log(url);


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


	handleActorChange(actor) {
		this.setState({ actor: actor });
	}

	handleGenreChange(genre) {
		this.stateState({ genre: genre });
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
