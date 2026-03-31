import { useContext, useState } from "react";
import {
  BookCardContainer,
  BookContent,
  ButtonsContainer,
  CapaImg,
  Comentario,
  EditButton,
  FeedbackContainer,
  RemoveButton,
  Status,
  TitleContent,
} from "./styles";
import { PencilSimple, Star, Trash } from "phosphor-react";
import { BookContext } from "../../contexts/BookContext";
import { Modal } from "../Modal";

interface Book {
  id: string;
  title: string;
  autor: string;
  status: string;
  url: string;
  comentario: string;
  rating: number;
}

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const [openModal, setOpenModal] = useState(false);
  const { removeBook, books } = useContext(BookContext);

  function handleRemoveBook() {
    removeBook(book.id);
  }

  function handleEditBook() {
    setOpenModal(true);
  }

  function handlecloseModal() {
    setOpenModal(false);
  }

  const currentBook = books.find((b) => b.id === book.id) || book;

  return (
    <BookCardContainer>
      <BookContent>
        <CapaImg src={currentBook.url || "https://via.placeholder.com/150"} />
        <TitleContent>
          <strong>{currentBook.title}</strong>
          <label>{currentBook.autor}</label>
        </TitleContent>
        <FeedbackContainer>
          <Status>{currentBook.status}</Status>
          <div style={{ display: "flex", gap: "2px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                weight={star <= currentBook.rating ? "fill" : "regular"}
                color={star <= currentBook.rating ? "#FDC700" : "#D1D5DC"}
              />
            ))}
          </div>
          <Comentario>{currentBook.comentario}</Comentario>
        </FeedbackContainer>
      </BookContent>
      <ButtonsContainer>
        <EditButton onClick={handleEditBook}>
          <PencilSimple size={16} color="#303030" />
          Editar
        </EditButton>
        <RemoveButton onClick={handleRemoveBook}>
          <Trash size={16} color="#D4183D" />
          Remover
        </RemoveButton>
      </ButtonsContainer>
      <Modal
        isOpen={openModal}
        closeModal={handlecloseModal}
        editingBook={currentBook}
      />
    </BookCardContainer>
  );
}
