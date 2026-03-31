import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 996px;
  margin: 32px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  gap: 12px;

  display: flex;
  align-items: center;

  background-color: #030213;
  color: #ffffff;

  border-radius: 8px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;

  span {
    font-size: 16px;
  }
`;
