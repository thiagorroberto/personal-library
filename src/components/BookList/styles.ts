import styled from "styled-components";

export const BookListContainer = styled.section`
  max-width: 996px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const NoBooks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;

  p {
    font-size: 16px;
    font-weight: 400;
    color: #717182;
  }
`;

export const BookCardContent = styled.ul`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 25px;
`;
