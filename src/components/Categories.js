import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import './../App.css';

class Categories extends Component {
  render() {
    const {name, books, callback, search} = this.props;
    return (
      <div className="shelf">
        <h2>{name}</h2>
        <div className="overflow-cont">
        {
          books.map((book, i) => {
            return <Book item={book} key={i} callback={callback} />;
          })
        }
        {
          search &&
          <Link to="/search"><div className="search-button btn">+</div></Link>
        }
        </div>
      </div>
    );
  }
}

export default Categories;