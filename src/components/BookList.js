import { BookShow } from './BookShow';

export function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}
