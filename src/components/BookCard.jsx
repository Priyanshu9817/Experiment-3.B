import React from "react";

function BookCard({ book, removeBook }) {
  return (
    <div className="card">
      <div>
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
      </div>
      <button className="remove" onClick={() => removeBook(book.id)}>
        Remove
      </button>
    </div>
  );
}

export default BookCard;
