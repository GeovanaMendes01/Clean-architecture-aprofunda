export interface BookData {
  id: string;
  title: string;
  author: string;
  description: string;
  status: string;
  created_at: string;
}

class BookStorage {
  private static instance: BookStorage;
  private books: BookData[] = [];

  private constructor() {}

  public static getInstance(): BookStorage {
    if (!BookStorage.instance) {
      BookStorage.instance = new BookStorage();
    }
    return BookStorage.instance;
  }

  public add(book: BookData): void {
    this.books.push(book);
  }

  public getAll(): BookData[] {
    return this.books;
  }
}

export default BookStorage.getInstance();