import { styled } from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: lightgrey;
`;

export const Card = styled.div`
  margin: 10px;
  flex-basis: 16%;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  padding: 10px;
`;

export const CardImg = styled.img`
  height: 100px;
  width: 150px;
`;
