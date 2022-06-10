export interface IBook {
  book: string;
  author: string;
  pages: number;
  genre: string;
}

export interface IBookList {
  items: Array<IBook>;
}
