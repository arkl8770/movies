import React from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import ResultsList from './ResultsList.js';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Movie Matchmaker.</h1>
      </header>

      <SearchForm />

      <ResultsList />
    </div>
  );
}

export default App;
