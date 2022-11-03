import { ButtonNotOpened, ButtonOpened, ButtonsWrapper } from "./styled";

interface IResultList {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultButtons: React.FC<IResultList> = ({ active, setActive }) => {
  return (
    <ButtonsWrapper>
      <ButtonOpened
        activeState={active}
        onClick={() => setActive(true)}>
        &#10003;
      </ButtonOpened>
      <ButtonNotOpened
        activeState={active}
        onClick={() => setActive(false)}>
        &#10007;
      </ButtonNotOpened>
    </ButtonsWrapper>
  )
};

export { ResultButtons };
