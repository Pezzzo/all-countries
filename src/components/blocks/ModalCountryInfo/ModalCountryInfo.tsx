import React from 'react';
import { useDispatch } from 'react-redux';
import { IDataTypes } from '../../../types/dataTypes';
import { CloseButton, ImgWrapper, ModalWrapper, StyledDiv, StyledImg } from './styled';
import { closeModal, closeModalHandler } from '../../../handlers/handlers'
import { StyledP, StyledSpan } from '../../../common-styles/styled';
import DetailCountryInfo from '../DetailCountryInfo/DetailCountryInfo';


interface Icomponent {
  data: IDataTypes
};

const ModalCountryInfo = ({ data }: Icomponent) => {

  const dispatch = useDispatch();

  closeModal(dispatch);

  return (
    <>
      <ModalWrapper onClick={(evt) => closeModalHandler(evt, dispatch)}>
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
