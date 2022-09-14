import styled from "styled-components";

export const StyledP = styled.p`
margin: 0;
padding: 6px 20px;
width: 100%;
height: 100%;
font-size: 14px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 16px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 18px;
}
`;
