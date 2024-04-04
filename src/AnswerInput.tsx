import classNames from 'classnames';
import './AnswerInput.css';
import useInputs from './useInputs';
import { Inputs } from './types';

const AnswerInput: React.FC<{
  index: number;
  duplicate: boolean;
}> = ({
  index,
  duplicate = false,
}) => {
  const inputsContext = useInputs();
  if (!inputsContext) {
    throw new Error('AnswerInput must be inside an InputsContext Provider');
  }
  const { inputs, setInputs } = inputsContext;

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
      onFocus={(e) => e.target.select()}
      className={classNames({ duplicate })}
      onChange={e => setInput(Number(e.target.value))}
      value={inputs[index]}
    />
  )
};

export default AnswerInput;