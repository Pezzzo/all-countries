import styled from "styled-components";

export const StyledHeader = styled.header`
min-height: 80px;
padding-top: 20px;
margin-bottom: 20px;
width: 100%;
display: flex;
justify-content: center;
background-color: ${(props) => props.theme.colorWhite};

@media ${(props) => props.theme.media.tablet} {
  font-size: 16px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 18px;
}
`;

export const NavWrapper = styled.div`
display: flex;
flex-shrink: 0;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
max-width: 260px;

@media ${(props) => props.theme.media.tablet} {
  min-width: 100%;
}
`;
