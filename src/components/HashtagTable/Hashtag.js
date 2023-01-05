import styled from "styled-components";

export default function Hashtag({id,name}) {
  
  return <Container># {name}</Container>;
}

const Container = styled.h3`
  font-style: normal;
  font-family: "Lato";
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 3px;
  cursor: pointer;
`;
