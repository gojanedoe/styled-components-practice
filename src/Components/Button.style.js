import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    & label {
      color: black;
    }
    background-color: coral;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`;
