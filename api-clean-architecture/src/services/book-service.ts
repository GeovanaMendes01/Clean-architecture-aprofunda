import bookFactory from '../factories/book-factory';
import BookStorage from '../storage/book-storage';

interface BookData {
  title: string;
  author: string;
  description: string;
  status: string;
}

interface Book extends BookData {
  id: string;
  created_at: string;
}

export default {
  createBook: ({ title, author, description, status }: BookData): Book => {
    const newBook = bookFactory.create({ title, author, description, status });
    BookStorage.add(newBook);
    return newBook;
  },

  getAllBooks: (): Book[] => {
    return BookStorage.getAll();
  },
};