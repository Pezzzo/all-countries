import { IDataTypes } from "../../../types/dataTypes";
import { CountriesFlags } from "../CountriesFlag/CountriesFlag";
import { CountriesName } from "../CountriesName/CountriesName";
import { ModalCountryInfo } from "../ModalCountryInfo/ModalCountryInfo";
import { CountriesList, FlagsList, ListsWrapper } from "./styled";

interface INamesAndFlags {
  sort: IDataTypes[] | undefined;
  notSort: IDataTypes[] | undefined;
  coincidence: boolean | undefined;
  selectedCountry: IDataTypes;
}

const NamesAndFlags: React.FC<INamesAndFlags> = ({ sort, notSort, coincidence, selectedCountry }) => {
  return (
    <ListsWrapper>
      <CountriesList>
        {notSort && notSort.map((item) => <CountriesName data={item} key={item.flag} />)}
      </CountriesList>

      <FlagsList>
        {sort && sort.map((item) => <CountriesFlags data={item} key={item.flag} />)}
      </FlagsList>
      {coincidence && <ModalCountryInfo data={selectedCountry} />}
    </ListsWrapper>
  )
};

export { NamesAndFlags };
