import styled from "styled-components";

export const P = styled.p`
@media ${(props) => props.theme.media.tablet} {
  font-size: 18px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 22px;
}
`;
