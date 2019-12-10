import React, {Component} from "react";
// import "movieSearch";



class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch() {

		if(this.props.title === ""){
			console.log(this.props.title);
		}
		else{
			console.log(this.props.title);
		}


		// this.props.searchByYear();
	}

	handleYearChange(e) {
		this.props.handleYearChange(e.target.value);
	}

	handleTitleChange(e) {
		this.props.handleTitleChange(e.target.value);
	}

	handleActorChange(e) {
		this.props.handleActorChange(e.target.value);
	}

	render() {
		return(

			<form onSubmit={e => { e.preventDefault(); }} id="search-form" className="form">
				<div className="form-group title-group">
					<label htmlFor="title">Title:</label>
					<input onChange={this.handleTitleChange} type="text" className="form-control" id="movieTitle" placeholder="e.g. Avengers"/>
				</div>
				<div className="or">Or</div>
				<br/>
				<div className="form-group genre-group">
					<label htmlFor="genre">Genre:</label>
					<select className="form-control" id="genre" disabled>
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

				<div className="form-group type-group">
					<div className="form-check-inline">
					  <input className="form-check-input" type="radio" name="type" id="movie" value="movie"/>
					  <label className="form-check-label" htmlFor="movie">Movie</label>
					</div>
					<div className="form-check-inline">
					  <input className="form-check-input" type="radio" name="type" id="series" value="series"/>
					  <label className="form-check-label" htmlFor="series">Series</label>
					</div>
					<div className="form-check-inline">
					  <input className="form-check-input" type="radio" name="type" id="episode" value="episode"/>
					  <label className="form-check-label" htmlFor="episode">Episode</label>
					</div>
				</div>

				<button onClick={this.handleSearch} type="button" id="search" className="btn btn-primary">Search</button>
			</form>
		);
	}

}

export default SearchForm;