import styled from "styled-components";

export const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-right: 20px;

  font-size: 24px;
  border-radius: 10px;
  border: 3px solid #ddd;
`;

export const Button = styled.button`
  height: 54px;

  cursor: pointer;
  color: #ffffff;
  font-size: 24px;
  padding: 10px 10px;
  background-color: #5938f5;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: #371fa6;
  }
`;
