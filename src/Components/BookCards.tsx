import React from 'react';
import { Book } from '../types/index';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
      <h2>{book.name}</h2>
      <p>Author: {book.authors.join(', ')}</p>
      <p>Released: {new Date(book.released).toLocaleDateString()}</p>
    </div>
  );
};

export default BookCard;
