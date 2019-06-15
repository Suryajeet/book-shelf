import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import BooksProvider from './components/BooksProvider';

class App extends Component {
  render() {
    return (
      <BooksProvider>
        <div className="book-app">
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Router>
        </div>
      </BooksProvider>
    );
  }
}

export default App;
