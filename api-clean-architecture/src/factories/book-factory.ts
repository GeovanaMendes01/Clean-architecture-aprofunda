import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/book-model';

interface BookData {
  title: string;
  author: string;
  description: string;
  status: string;
}

export default {
  create: ({ title, author, description, status }: BookData) => {
    return new Book({
      id: uuidv4(),
      title,
      author,
      description,
      status,
      created_at: new Date().toLocaleDateString('pt-BR'),
    });
  },
};