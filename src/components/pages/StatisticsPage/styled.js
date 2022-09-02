import styled from "styled-components";

export const ListsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const StyledOl = styled.ol`
margin: 0;
padding: 0 40px;
display: flex;
flex-direction: column;
`
export const OpenedP = styled.p`
margin: 0;
padding: 4px;
cursor: pointer;

&:hover {
  background-color: ${(props) => props.theme.colorLightGreen};
}
`
export const ClosedP = styled(OpenedP)`

&:hover {
  background-color: ${(props) => props.theme.colorLightRed};
}
`
export const ResetButtonWrapper = styled.div`
margin-left: auto;
`
