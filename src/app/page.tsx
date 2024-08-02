// app/page.tsx
import fs from 'fs';
import path from 'path';
import { Book } from '../types';
import BookCard from '../Components/BookCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List of Books',
  description: 'A list of books from the books.json file.',
};

const getBooks = async (): Promise<Book[]> => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'books.json');
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
};

const Home = async () => {
  const books = await getBooks();

  return (
    <div>
      <h1>List of Books</h1>
      <div>
        {books.map((book) => (
          <BookCard key={book.isbn} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
