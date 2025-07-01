import { Request, Response } from 'express';
import BookService from '../services/book-service';

export const createBook = (req: Request, res: Response): void => {
  const { title, author, description, status } = req.body;
  const newBook = BookService.createBook({ title, author, description, status });
  res.status(201).json({ message: `Livro '${newBook.title}' criado com sucesso!` });
};

export const listBooks = (req: Request, res: Response): void => {
  const books = BookService.getAllBooks();
  res.json(books);
};