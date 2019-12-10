import React, {Component} from 'react';
import './SearchForm.js';
import './App.js';

class movieSearch extends Component{

	constructor(props){
		//console.log("movieSearch");
		super(props);

		this.state = {
			year: {}
		};
	}

	componentDidMount = () => {
		console.log("year search");
		const key = '706733eb15b955d867b9853c3b840e78';
		const releaseYear = document.getElementById('yearInput');
		let url = ('https://api.themoviedb.org/3/discover/movie?api_key=', key, '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=', releaseYear);
		fetch(url)
		.then(response => response.json())
		.then(movie => (
			this.setState({  })
		));

	}

	render() {
		return (
      		<div>
        		<input id = 'yearInput'
          			value={this.state.value}
          			// onChange={e => this.onChangeHandler(e)}
          			placeholder="e.g. 2019"
        		/>
        		{this.renderYear}
				<button type="button" id="movieButton" className="btn btn-primary" onClick={ this.componentDidMount }>Search</button>

      		</div>
    );
	}


}

export default movieSearch;