import styled from "styled-components";

export const BookCardContainer = styled.section`
  width: 230px;
  display: flex;
  flex-direction: column;

  border: 1px solid #e1e1e6;
  border-radius: 8px;

  gap: 24px;
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 456px;
  padding: 16px;
`;

export const CapaImg = styled.img`
  width: 196px;
  height: 260px;
  border-radius: 8px;
`;

export const TitleContent = styled.section`
  display: flex;
  flex-direction: column;

  width: 196px;
  margin-top: 16px;

  gap: 2px;

  strong {
    font-size: 16px;
    font-weight: 600;
    color: #0a0a0a;
  }

  label {
    font-size: 16px;
    font-weight: 400;
    color: #717182;
  }
`;

export const FeedbackContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 8px;
  margin-top: 12px;
`;

export const Status = styled.span`
  width: 41px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 500;

  color: #016630;
  background-color: #dcfce7;

  border-radius: 8px;
`;

export const Comentario = styled.p`
  color: #717182;

  font-size: 14px;
  font-weight: 400;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 8px;
  height: 52px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const EditButton = styled.button`
  width: 102px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  background-color: #ffffff;

  border: 1px solid #e1e1e6;
  border-radius: 8px;
`;

export const RemoveButton = styled.button`
  width: 102px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  background-color: #ffffff;
  color: #d4183d;

  border: 1px solid #e1e1e6;
  border-radius: 8px;
`;
