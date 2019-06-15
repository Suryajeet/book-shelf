import React, { Component } from 'react';
import './../App.css';

class Book extends Component {
  render() {
    const {item, callback} = this.props;

  	return <div className="book-container">
      <div className="thumbnnail">
        <img src={item.image} alt={item.name} className="image" />
      </div>
      <div className="book-details">
        <div>{item.name}</div>
        <div className="price">&#8377; {item.price}</div>
        <div className="book-button btn"><i className="fas fa-sort-down"></i></div>
        <select value={item.category} onChange={(e) => callback(e, item.id)}>
          <option value="Move To" disabled>Move to...</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want To Read">Want To Read</option>
          <option value="Read">Read</option>
          <option value="None">None</option>
        </select>
      </div>
  	</div>;
  }
}

export default Book;