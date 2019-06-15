import React, { Component } from 'react';
import './../App.css';
import { BooksConsumer } from './BooksProvider';
import Book from './Book';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksSearched: [],
    };
  }

  searchBooks = (event, books) => {
    let booksSearched = [];
    books.forEach((book, i) => {
      if(event.target.value && book.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        booksSearched.push(book);
      }
    });
    this.setState({booksSearched});
  }

  render() {
    let {booksSearched} = this.state;
    return (
      <BooksConsumer>
        {({books, updateBooks}) => (
          <div className="book-search">
            <div className="search-cont">
              <Link to="/"><span><i className="far fa-arrow-left"></i></span></Link>
              <input type="text" onChange={(e) => this.searchBooks(e, books)} autoFocus />
            </div>
            <div>
            {
              booksSearched.map((book, i) => {
                return <Book item={book} key={i} callback={updateBooks} />;
              })
            }
            </div>
          </div>
        )}
      </BooksConsumer>
    );
  }
}

export default Search
