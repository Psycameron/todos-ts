import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  width: 400px;
  padding: 20px 20px;

  font-size: 20px;
  border-radius: 20px;
  background-color: #edcac0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Index = styled.span`
  font-weight: 600;
`;

export const Title = styled.span`
  max-width: 250px;
  word-wrap: break-word;
  text-align: left;
`;

export const Button = styled.button`
  height: 34px;
  margin-top: auto;
  margin-bottom: auto;

  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  padding: 6px 6px;
  background-color: #5938f5;
  border-radius: 10px;
  &:hover {
    background-color: #371fa6;
  }
`;
