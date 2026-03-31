import { BookList } from "./components/BookList";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import { BookProvider } from "./contexts/BookContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BookProvider>
      <GlobalStyle />
      <Header />
      <Resume />
      <Filter />
      <BookList />
    </BookProvider>
  );
}
