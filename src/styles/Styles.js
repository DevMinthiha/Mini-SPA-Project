import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 50px 0;
    justify-content: space-between;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 5px 7px 100px -34px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 100px -34px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 100px -34px rgba(0, 0, 0, 0.75);
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 15px;
  margin: 20px 0;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;