import styled from "styled-components";

export const FilterContainer = styled.section`
  max-width: 996px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;
`;

export const FilterInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  height: 36px;

  background-color: #f3f3f5;

  border: none;
  border-radius: 8px;
`;

export const StatusInput = styled.select`
  width: 192px;
  height: 36px;
  padding: 8px 12px;

  background-color: #f3f3f5;

  font-size: 14px;
  color: #0a0a0a;

  border: none;
  border-radius: 8px;
`;
