import React, {Component} from "react";
// import "movieSearch";



class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch() {
		this.props.searchByYear();
	}

	handleYearChange(e) {
		this.props.handleYearChange(e.target.value);
	}

	render() {
		return(

			<form onSubmit={e => { e.preventDefault(); }} id="search-form" className="form">
				<div className="form-group genre-group">
					<label htmlFor="genre">Genre:</label>
					<select className="form-control" id="genre" disabled>
						<option value="">Choose a genre...</option>
						<option value="">Comedy</option>
						<option value="">Sci-Fi</option>
						<option value="">Horror</option>
						<option value="">Romance</option>
						<option value="">Action</option>
						<option value="">Thriller</option>
						<option value="">Drama</option>
						<option value="">Mystery</option>
						<option value="">Crime</option>
						<option value="">Animation</option>
						<option value="">Adventure</option>
						<option value="">Fantasy</option>
						<option value="">Comedy-Romance</option>
						<option value="">Action-Comedy</option>
						<option value="">Superhero</option>
					</select>
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