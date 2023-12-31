import { useState } from 'react';
import { BookCreate } from './components/BookCreate';
import { BookList } from './components/BookList';

export function App() {
  const [books, setBooks] = useState([]);

  const deleteBookByd = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  }


  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };



  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookByd} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
