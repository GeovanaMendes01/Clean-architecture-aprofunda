export class Book {
  id: string;
  title: string;
  author: string;
  status: string;
  description: string;
  created_at: string;

  constructor({
    id,
    title,
    author,
    status,
    description,
    created_at,
  }: {
    id: string;
    title: string;
    author: string;
    status: string;
    description: string;
    created_at: string;
  }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.status = status;
    this.description = description;
    this.created_at = created_at;
  }
}