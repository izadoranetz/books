import { useState } from 'react';
import { BookCreate } from './components/BookCreate';

export function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: 123, title: title }];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}
