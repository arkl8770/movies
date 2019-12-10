import React, {Component} from 'react';
//import './SearchForm.js';
import './App.js';

class ActorSearch extends Component{

	constructor(props){
		super(props);

		this.state = {
			actor: {}
		};
	}

	componentDidMount = () => {
		console.log("actor search");
		const key = '706733eb15b955d867b9853c3b840e78';
		const actorName = document.getElementById('actorInput');
		let url = ('http://api.tmdb.org/3/search/person?api_key=', key, '&query=', actorName);
		fetch(url)
		.then(response => response.json())
		.then(movie => (
			this.setState({  })
		));
		console.log("done with actor search");

	}

		render() {
		return (
      		<div>
        		<input id = 'actorInput'
          			value={this.state.value}
          			// onChange={e => this.onChangeHandler(e)}
          			placeholder="Search Actor"
        		/>
        		{this.renderActors}
				<button type="button" id="movieButton" className="btn btn-primary" onClick={ this.componentDidMount }>Search</button>

      		</div>
    );
	}
}

export default ActorSearch;
