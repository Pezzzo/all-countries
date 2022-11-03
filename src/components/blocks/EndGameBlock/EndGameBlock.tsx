import { Link } from "react-router-dom";
import { H2, IntermediateWrapper, PlayButton } from "../../../common-styles/common";
import { Button } from "../../ui/Button/Button";
import { P } from "./styled";


const EndGameBlock: React.FC = () => {
  return (
    <IntermediateWrapper>
      <H2>Accept congratulations, <br />  because it was the last round!</H2>
      <P>It's time to look at the results</P>
      <Link to='/results'>
        <PlayButton type="button">
          <Button>
            go to results
          </Button>
        </PlayButton>
      </Link>
    </IntermediateWrapper>
  )
};

export { EndGameBlock };
