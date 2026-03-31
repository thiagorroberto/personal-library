import { BookOpen, Plus } from "phosphor-react";
import { AddButton, HeaderContainer, Title, TitleContainer } from "./style";
import { useState } from "react";
import { Modal } from "../Modal";

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  function handleNewBook() {
    setOpenModal(true);
  }

  function handlecloseModal() {
    setOpenModal(false);
  }

  return (
    <HeaderContainer>
      <TitleContainer>
        <BookOpen size={32} />
        <Title>Minha Biblioteca</Title>
      </TitleContainer>
      <AddButton onClick={handleNewBook}>
        <Plus size={16} color="#fcfcfc" weight="bold" /> Adicionar Livro
      </AddButton>
      <Modal isOpen={openModal} closeModal={handlecloseModal} />
    </HeaderContainer>
  );
}
