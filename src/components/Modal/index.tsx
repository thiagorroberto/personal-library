import {
  AddButtonForm,
  BookForm,
  CancelButtonForm,
  CloseButton,
  FooterBookForm,
  ModalContainer,
  Overlay,
  StarsContainer,
} from "./style";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";
import { useForm } from "react-hook-form";
import { Star } from "phosphor-react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  editingBook?: Book | null;
}

interface Book {
  id: string;
  title: string;
  autor: string;
  status: string;
  url: string;
  comentario: string;
  rating: number;
}

interface BookFormValues {
  title: string;
  autor: string;
  status: string;
  url: string;
  comentario: string;
  rating: number;
}

export function Modal({ isOpen, closeModal, editingBook }: ModalProps) {
  const { createBook, updateBook } = useContext(BookContext);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormValues>({
    defaultValues: {
      title: "",
      autor: "",
      status: "Lido",
      url: "",
      comentario: "",
      rating: 0,
    },
  });

  useEffect(() => {
    if (editingBook) {
      reset({
        title: editingBook.title,
        autor: editingBook.autor,
        status: editingBook.status,
        url: editingBook.url,
        comentario: editingBook.comentario,
        rating: editingBook.rating || 0,
      });
    } else {
      reset({
        title: "",
        autor: "",
        status: "Lido",
        url: "",
        comentario: "",
        rating: 0,
      });
    }
  }, [editingBook, reset]);

  useEffect(() => {
    if (editingBook) {
      setRating(editingBook.rating || 0);
    } else {
      setRating(0);
    }
  }, [editingBook]);

  function onSubmit(data: BookFormValues) {
    const bookData = { ...data, rating };
    if (editingBook && editingBook.id) {
      updateBook(editingBook.id, bookData);
      closeModal();
    } else {
      createBook(bookData);
      closeModal();
      reset();
      setRating(0);
    }
  }

  function handleClose() {
    reset();
    setRating(0);
    closeModal();
  }

  if (isOpen) {
    return (
      <Overlay onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          <h1>Adicionar livro</h1>
          <BookForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Título *</p>
              <input
                type="text"
                placeholder="Digite o titulo do livro"
                {...register("title", { required: "Título é obrigatório" })}
              />
              {errors.title && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.title.message}
                </span>
              )}
            </div>

            <div>
              <p>Autor *</p>
              <input
                type="text"
                placeholder="Digite o nome do autor"
                {...register("autor", { required: "Autor é obrigatório" })}
              />
              {errors.autor && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.autor.message}
                </span>
              )}
            </div>

            <div>
              <p>URL da imagem</p>
              <input
                type="text"
                placeholder="URL da capa do livro (opcional)"
                {...register("url")}
              />
            </div>

            <div>
              <p>Status</p>
              <select {...register("status")}>
                <option value="Lido">Lido</option>
                <option value="Lendo">Lendo</option>
                <option value="Quero ler">Quero ler</option>
              </select>
            </div>

            <div>
              <p>Avaliação</p>
              <StarsContainer>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    weight={star <= rating ? "fill" : "regular"}
                    color={star <= rating ? "#FDC700" : "#D1D5DC"}
                    onClick={() => setRating(star)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </StarsContainer>
            </div>

            <div>
              <p>Comentário</p>
              <textarea
                placeholder="Suas anotações sobre o livro (opcional)"
                {...register("comentario")}
              />
            </div>

            <FooterBookForm>
              <CancelButtonForm type="button" onClick={handleClose}>
                Cancelar
              </CancelButtonForm>
              <AddButtonForm type="submit">Adicionar</AddButtonForm>
            </FooterBookForm>
          </BookForm>
        </ModalContainer>
      </Overlay>
    );
  }

  return null;
}
