import React, {Component} from 'react';
import 'movieSearch';



class SearchForm extends Component {

	render() {
		return(
			<form id="search-form" className="form">
				<div className="form-group genre-group">
					<label htmlFor="genre">Genre:</label>
					<select className="form-control" id="genre">
						<option>Comedy</option>
						<option>Sci-Fi</option>
						<option>Horror</option>
						<option>Romance</option>
						<option>Action</option>
						<option>Thriller</option>
						<option>Drama</option>
						<option>Mystery</option>
						<option>Crime</option>
						<option>Animation</option>
						<option>Adventure</option>
						<option>Fantasy</option>
						<option>Comedy-Romance</option>
						<option>Action-Comedy</option>
						<option>Superhero</option>
					</select>
				</div>








				<div className="form-group year-group">
					<label htmlFor="yearOfRelease">Year of Release:</label>
					<input type="number" className="form-control" id="yearOfRelease" max="2019" min="1874" placeholder="e.g. 2019"/>
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

				<button type="button" id="search" className="btn btn-primary">Search</button>
			</form>
		);
	}

}

export default SearchForm;