import React from 'react';
import { useDispatch } from 'react-redux';
import { IDataTypes } from '../../../types/dataTypes';
import { getLanguages, getTimezones } from '../../../util/util';
import { CloseButton, ImgWrapper, ModalWrapper, StyledDiv, StyledImg } from './styled';
import { closeModal, closeModalHandler } from '../../../handlers/handlers'
import { StyledP, StyledSpan } from '../../../common-styles/styled';


interface Icomponent {
  data: IDataTypes
};

const DetailCountryInfo = ({ data }: Icomponent) => {

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
          <StyledP><StyledSpan>Continents: </StyledSpan>{data.continents}</StyledP>
          <StyledP><StyledSpan>Country: </StyledSpan>{data.name.common}</StyledP>
          <StyledP><StyledSpan>Capital: </StyledSpan>{data.capital}</StyledP>
          <StyledP><StyledSpan>Languages: </StyledSpan>{getLanguages(data)}</StyledP>
          <StyledP><StyledSpan>Population: </StyledSpan>{data.population}</StyledP>
          <StyledP><StyledSpan>Area: </StyledSpan>{data.area}</StyledP>
          <StyledP><StyledSpan>Timezones: </StyledSpan>{getTimezones(data)}</StyledP>
          <StyledP><StyledSpan>On the map: </StyledSpan><a href={data.maps.googleMaps} target="_blank" rel="noopener noreferrer">{data.maps.googleMaps}</a></StyledP>
        </StyledDiv>
      </ModalWrapper>
    </>
  );
}

export default DetailCountryInfo;
