import { useDispatch } from "react-redux";
import { IntermediateWrapper } from "../../../common-styles/common";
import { getPartData } from "../../../data/data";
import { IDataTypes } from "../../../types/dataTypes";
import { Button } from "../../ui/Button/Button";
import { EndRoundTitle, FadeButton } from "./styled";

interface IEndRound {
  emptyArray: boolean | undefined;
  originalData: IDataTypes[];
}

const EndRound: React.FC<IEndRound> = ({ emptyArray, originalData }) => {

  const dispatch = useDispatch();

  return (
    <IntermediateWrapper>
      {
        emptyArray ?
          <EndRoundTitle>the list is empty, please open the following list</EndRoundTitle> :
          <EndRoundTitle>too many misses, please open the following list</EndRoundTitle>
      }
      <FadeButton type="button">
        <Button clickHandler={() => getPartData(dispatch, originalData)}>
          next list countries
        </Button>
      </FadeButton>
    </IntermediateWrapper>
  )
};

export { EndRound };
