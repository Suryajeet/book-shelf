import React, { Component } from 'react';
import Categories from './Categories';
import { BooksConsumer } from './BooksProvider';
import './../App.css';

class Home extends Component {
  render() {
    return (
      <BooksConsumer>
        {({categories, updateBooks}) => (
          <div className="book-home">
            <Categories name="Currently Reading" books={categories["Currently Reading"]} callback={updateBooks} />
            <Categories name="Want To Read" books={categories["Want To Read"]} callback={updateBooks} search={true} />
            <Categories name="Read" books={categories["Read"]} callback={updateBooks} />
          </div>
        )}
      </BooksConsumer>
    );
  }
}

export default Home;