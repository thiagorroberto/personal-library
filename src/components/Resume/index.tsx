import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import { ResumeContainer } from "./styles";
import { ResumeCard } from "../ResumeCard";

export function Resume() {
  const { filteredBooks } = useContext(BookContext);

  const todos = filteredBooks.length;

  const { queroLer, lendo, lidos } = filteredBooks.reduce(
    (acc, book) => {
      const status = book.status.toLowerCase();

      if (status === "quero ler") {
        acc.queroLer++;
      } else if (status === "lendo") {
        acc.lendo++;
      } else if (status === "lido") {
        acc.lidos++;
      }

      return acc;
    },
    {
      queroLer: 0,
      lendo: 0,
      lidos: 0,
    },
  );

  return (
    <ResumeContainer>
      <ResumeCard number={todos} status="Todos" />
      <ResumeCard number={queroLer} status="Quero ler" />
      <ResumeCard number={lendo} status="Lendo" />
      <ResumeCard number={lidos} status="Lidos" />
    </ResumeContainer>
  );
}
