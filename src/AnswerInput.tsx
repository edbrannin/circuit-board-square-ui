import classNames from 'classnames';
import './AnswerInput.css';
import useInputs from './useInputs';
import { Inputs, InputsIndex } from './types';
import useInputFocus from './useInputFocus';

const AnswerInput: React.FC<{
  index: InputsIndex;
  duplicate: boolean;
}> = ({
  index,
  duplicate = false,
}) => {
  const inputsContext = useInputs();
  const inputFocusContext = useInputFocus();

  if (!inputsContext) {
    throw new Error('AnswerInput must be inside an InputsContext Provider');
  }
  const { inputs, setInputs } = inputsContext;

  if (!inputFocusContext) {
    throw new Error('Board must be inside an InputFocusContext Provider');
  }
  const { setInputFocus } = inputFocusContext;


  const setInput = (value: number) => {
    if (Number.isNaN(value)) {
      return false;
    }
    const result = [...inputs] as Inputs;
    result[index] = value;
    setInputs(result);
  }

  return (
    <input
      onFocus={(e) => {
        e.target.select();
        setInputFocus(index);
      }}
      onBlur={() => setInputFocus(undefined)}
      className={classNames('answer', { duplicate: duplicate || inputs[index] === 0 })}
      onChange={e => setInput(Number(e.target.value))}
      value={inputs[index]}
    />
  )
};

export default AnswerInput;