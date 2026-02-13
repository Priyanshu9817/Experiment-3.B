import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import "./index.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
     { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 7, title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling" }
  ]);

  const [search, setSearch] = useState("");

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <SearchBar setSearch={setSearch} />
      <BookForm addBook={addBook} />

      {filteredBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
}

export default App;
