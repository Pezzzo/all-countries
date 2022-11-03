import { useDispatch } from 'react-redux';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledLi, StyledP } from './styled';
import { countryNameHandler } from '../../../handlers/handlers';

interface ICountriesName {
  data: IDataTypes
};

const CountriesName: React.FC<ICountriesName> = ({ data }) => {

  const dispatch = useDispatch();

  return (
    <>
      <StyledLi>
        <StyledP
          className="country countryNamePassive"
          onClick={(evt) => countryNameHandler(evt, data, dispatch)}>
          {data.name.common}
        </StyledP>
      </StyledLi>
    </>
  )
};

export { CountriesName };
