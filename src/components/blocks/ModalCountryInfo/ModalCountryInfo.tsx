import React from 'react';
import { useDispatch } from 'react-redux';
import { IDataTypes } from '../../../types/dataTypes';
import { CloseButton, ImgWrapper, ModalWrapper, StyledDiv, StyledImg } from './styled';
import { StyledP, StyledSpan } from '../../../common-styles/styled';
import DetailCountryInfo from '../DetailCountryInfo/DetailCountryInfo';
import { closeModalKeyboard, closeModalMouse } from '../../../util/util';
import useSelectors from '../../../hooks/useSelectors';


interface Icomponent {
  data: IDataTypes
};

const ModalCountryInfo = ({ data }: Icomponent) => {

  const {partData} = useSelectors();

  const dispatch = useDispatch();

  closeModalKeyboard(dispatch, partData);

  return (
    <>
      <ModalWrapper onClick={(evt) => closeModalMouse(evt, dispatch, partData)}>
        <StyledDiv className="modal">
          <CloseButton className="closeButton">×</CloseButton>
          <ImgWrapper>
            <StyledImg src={data.flags.png}
              width="320"
              height="210"
              alt="flag" />
          </ImgWrapper>
          <StyledP>
            <StyledSpan>Country: </StyledSpan>
            {data.name.common}
          </StyledP>
          <DetailCountryInfo data={data} />
        </StyledDiv>
      </ModalWrapper>
    </>
  );
}

export default ModalCountryInfo;
