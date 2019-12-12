import React, {Component} from "react";
//import App from './App.js';


class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSearch2 = this.handleSearch2.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTitleSearch = this.handleTitleSearch.bind(this);
		this.handleDiscoverSearch = this.handleDiscoverSearch.bind(this);
		this.handleGenreChange = this.handleGenreChange.bind(this);
	}

	handleGenreChange(e) {
		this.props.handleGenreChange(e.target.value);
	}

	handleDiscoverSearch() {
		this.props.discoverSearch();

	}
	handleSearch2() {
		console.log("in search 2");
		// console.log(this.props.title);
		// this.props.searchByTitle();

		// if(this.props.title === ""){
		// 	console.log(this.props.title);
		// 	this.props.searchByYear();
		// }
		// else{
		// 	//console.log(this.props.title);
		// 	this.props.searchByTitle();
		// }
		console.log(this.props.title);
	handleTitleSearch() {
		this.props.searchByTitle();
	}

		handleYearChange(e) {
			this.props.handleYearChange(e.target.value);
			console.log(e.target.value);
		};

		handleTitleChange(e) {
			this.props.handleTitleChange(e.target.value);
			console.log(e.target.value);
		};
	// handleActorChange(e) {
	// 	this.props.handleActorChange(e.target.value);
	// }

	handleGenreChange(e) {
		this.props.handleGenreChange(e.target.value);
	}

	render() {

		return(

			<form onSubmit={e => { e.preventDefault(); }} id="search-form" className="form">
				<div className="form-group title-group">
					<label htmlFor="title">Title:</label>
					<input onChange={this.handleTitleChange} type="text" className="form-control" id="movieTitle" placeholder="e.g. Avengers"/>
				</div>
				<button onClick={this.handleSearch2} type="button" id="search" className="btn btn-primary">Search</button>

				<div className="or">Or</div>
				<button onClick={this.handleTitleSearch} type="button" id="search" className="btn btn-primary">Search</button>
				<div className="or">- Or -</div>
				<br/>
				<div className="form-group genre-group">
					<label htmlFor="genre">Genre:</label>
					<select onChange={this.handleGenreChange} className="form-control" id="genre">
						<option value="">Choose a genre...</option>
						<option value="35">Comedy</option>
						<option value="878">Sci-Fi</option>
						<option value="27">Horror</option>
						<option value="10749">Romance</option>
						<option value="28">Action</option>
						<option value="53">Thriller</option>
						<option value="18">Drama</option>
						<option value="9648">Mystery</option>
						<option value="80">Crime</option>
						<option value="16">Animation</option>
						<option value="12">Adventure</option>
						<option value="14">Fantasy</option>
						<option value="37">Western</option>
						<option value="10752">War</option>
						<option value="10751">Family</option>
					</select>
				</div>
				<div className="form-group actor-group">
					<label htmlFor="actor">Actor:</label>
					<input onChange={this.handleActorChange} type="text" className="form-control" id="movieActor" placeholder="e.g. Robert Downey Jr."/>
				</div>
				<div className="form-group year-group">
					<label htmlFor="yearOfRelease">Year of Release:</label>
					<input onChange={this.handleYearChange} type="number" className="form-control" id="yearOfRelease" max="2019" min="1874" placeholder="e.g. 2019" />
				</div>


				<button onClick={this.handleDiscoverSearch} type="button" id="search" className="btn btn-primary">Search</button>
			</form>
		);
	}
}

export default SearchForm;