import React, { useState } from "react";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    addBook({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>Add Book</button>
    </form>
  );
}

export default BookForm;
