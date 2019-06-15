import React, { Component } from 'react'
import data from './../data';

const BooksContext = React.createContext();
export const BooksConsumer = BooksContext.Consumer;

class BooksProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: data.books || [],
      updateBooks: (event, id) => this.updateBooks(event, id)
    };
    this.state.categories = this.categoriseItems(this.state.books);
  }

  categoriseItems = (books) => {
    let categories = {
      "Currently Reading": [],
      "Want To Read": [],
      "Read": [],
      "None": []
    };
    books.forEach((book, i) => {
      categories[book.category].push(book);
    });
    return categories;
  }

  updateBooks = (event, id) => {
    let books = this.state.books;

    for (var i = books.length - 1; i >= 0; i--) {
      if(books[i].id === id) {
        books[i].category = event.target.value;
        break;
      }
    }

    let categories = this.categoriseItems(books);
    this.setState({books, categories});

    // call an API to update the book with the given id in DB.
  }
  
  render () {
    return (
      <BooksContext.Provider value={this.state}>
        {this.props.children}
      </BooksContext.Provider>
    );
  }
}
export default BooksProvider;