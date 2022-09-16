import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IDataTypes } from '../../../types/dataTypes';
import { CloseButton, ImgWrapper, ModalWrapper, StyledDiv, StyledImg } from './styled';
import { StyledP, StyledSpan } from '../../../common-styles/styled';
import DetailCountryInfo from '../DetailCountryInfo/DetailCountryInfo';
import useSelectors from '../../../hooks/useSelectors';
import { closeModal, closeModalMouseHandler } from '../../../handlers/handlers';

interface IModal {
  data: IDataTypes
};

const ModalCountryInfo = ({ data }: IModal) => {

  const { partData, sortPartData } = useSelectors();

  const dispatch = useDispatch();

  const closeModalKeyboardHandler = () => {
    closeModal(dispatch, partData, sortPartData);
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalKeyboardHandler);

    return () => {
      window.removeEventListener('keydown', closeModalKeyboardHandler);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ModalWrapper className="modal-wrapper closed"
        onClick={(evt) => closeModalMouseHandler(evt, dispatch, partData, sortPartData)}>
        <StyledDiv className="modal">
          <CloseButton className="closeButton">×</CloseButton>
          <ImgWrapper>
            <StyledImg src={data.flags.png}
              width="160"
              height="100"
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
