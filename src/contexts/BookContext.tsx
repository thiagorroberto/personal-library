import { createContext, useState, useMemo, type ReactNode } from "react";

interface Book {
  id: string;
  title: string;
  autor: string;
  status: string;
  url: string;
  comentario: string;
  rating: number;
}

interface NewBook {
  title: string;
  autor: string;
  status: string;
  url: string;
  comentario: string;
  rating: number;
}

interface BookContextProps {
  createBook: (data: NewBook) => void;
  updateBook: (id: string, data: NewBook) => void;
  removeBook: (id: string) => void;
  books: Book[];
  filteredBooks: Book[];
  filterBooks: (value: string) => void;
  filter: string;
  setStatusBooks: (value: string) => void;
  status: string;
}
interface BookProviderProps {
  children: ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext({} as BookContextProps);

export function BookProvider({ children }: BookProviderProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((b) => {
      const search = filter.toLowerCase().trim();

      const titleMatch =
        !search || (b.title?.toLowerCase() || "").includes(search);
      const autorMatch =
        !search || (b.autor?.toLowerCase() || "").includes(search);
      const searchMatch = titleMatch || autorMatch;

      const statusMatch = !status || status === "Todos" || b.status === status;

      return searchMatch && statusMatch;
    });
  }, [books, filter, status]);

  function filterBooks(value: string) {
    setFilter(value);
  }

  function setStatusBooks(value: string) {
    setStatus(value);
  }

  function createBook(data: NewBook) {
    const newBook = {
      id: crypto.randomUUID(),
      ...data,
    };

    setBooks((prev) => [...prev, newBook]);
  }

  function updateBook(id: string, data: NewBook) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id
          ? { ...book, ...data } // cria nova referência
          : book,
      ),
    );
  }

  function removeBook(id: string) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  return (
    <BookContext.Provider
      value={{
        createBook,
        updateBook,
        removeBook,
        books,
        filteredBooks,
        filterBooks,
        filter,
        setStatusBooks,
        status,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
