import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 425px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #0a0a0a;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;

export const BookForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 16px;

  div {
    display: flex;
    flex-direction: column;

    width: 377px;
    gap: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #0a0a0a;
  }

  input,
  select {
    padding: 8px 12px;

    border: none;
    border-radius: 8px;

    background-color: #f3f3f5;
  }

  textarea {
    padding: 8px 12px;

    border: none;
    border-radius: 8px;

    background-color: #f3f3f5;

    min-width: 377px;
    max-width: 377px;
    min-height: 66px;
    max-height: 66px;

    font-size: 14px;
    color: #717182;
  }
`;

export const FooterBookForm = styled.footer`
  display: flex;
  gap: 8px;

  justify-content: flex-end;

  button {
    width: 92px;
    padding: 8px 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
  }
`;

export const CancelButtonForm = styled.button`
  background-color: #ffffff;

  font-size: 14px;
  font-weight: 500;
  color: #0a0a0a;

  border: 1px solid #e1e1e6;
`;

export const AddButtonForm = styled.button`
  background-color: #030213;

  font-size: 14px;
  font-weight: 500;
  color: #ffffff;

  border: none;
`;

export const StarsContainer = styled.section`
  display: flex;
  gap: 4px;

  svg {
    cursor: pointer;
  }
`;
