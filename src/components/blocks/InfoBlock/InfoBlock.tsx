import { useDispatch } from 'react-redux';
import { PlayButton, RowWrapper } from '../../../common-styles/common';
import { getPartData } from '../../../data/data';
import { IDataTypes } from '../../../types/dataTypes';
import { Button } from '../../ui/Button/Button';
import {
  CounterFail,
  CounterRound,
  CounterWrapper,
  Span,
  InfoWrapper,
} from './styled';

interface IInfoBlock {
  originalData: IDataTypes[];
  started: boolean;
  roundCount: number;
  attemptСount: number;
};

const InfoBlock: React.FC<IInfoBlock> = ({ started, roundCount, attemptСount, originalData }) => {

  const dispatch = useDispatch();

  return (
    <RowWrapper>
      {
        !started ?
          <PlayButton type="button">
            <Button clickHandler={() => getPartData(dispatch, originalData)}>start</Button>
          </PlayButton>
          :
          <InfoWrapper>
            <CounterRound>
              round: <span>{roundCount}</span>
            </CounterRound>
            <CounterWrapper>
              <CounterFail>
                right to fail: <Span className="counter">{attemptСount}</Span>
              </CounterFail>
            </CounterWrapper>
          </InfoWrapper>
      }
    </RowWrapper>
  )
};

export { InfoBlock };
