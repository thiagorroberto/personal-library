import { useContext } from "react";
import { FilterContainer, FilterInput, StatusInput } from "./styles";
import { BookContext } from "../../contexts/BookContext";

export function Filter() {
  const { filterBooks, setStatusBooks, filter } = useContext(BookContext);

  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder="Buscar por título ou autor..."
        value={filter}
        onChange={(e) => filterBooks(e.target.value)}
      />
      <StatusInput
        name="status"
        id="status"
        onChange={(e) => setStatusBooks(e.target.value)}
      >
        <option value="Todos">Todos os status</option>
        <option value="Lido">Lido</option>
        <option value="Lendo">Lendo</option>
        <option value="Quero ler">Quero ler</option>
      </StatusInput>
    </FilterContainer>
  );
}
