import { useContext } from "react";
import { BookCard } from "../BookCard";
import { BookCardContent, BookListContainer, NoBooks } from "./styles";
import { BookContext } from "../../contexts/BookContext";

export function BookList() {
  const { filteredBooks } = useContext(BookContext);

  if (!filteredBooks) {
    return <p>Carregando...</p>;
  }

  return (
    <BookListContainer>
      {filteredBooks.length === 0 ? (
        <NoBooks>
          <p>
            Nenhum livro adicionado ainda. Comece adicionando seu primeiro
            livro!
          </p>
        </NoBooks>
      ) : (
        <BookCardContent as="ul">
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </BookCardContent>
      )}
    </BookListContainer>
  );
}
