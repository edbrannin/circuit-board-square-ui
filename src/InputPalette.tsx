import classNames from "classnames";
import useInputs from "./useInputs"
import './InputPalette.css'
import useInputFocus from "./useInputFocus";
import { useState } from "react";
import { InputsIndex } from "./types";

const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type InputPaletteProps = {
  setNumber: (value: number, index: InputsIndex) => void;
}

const InputPalette = ({
  setNumber,
}: InputPaletteProps) => {
  const inputsContext = useInputs();
  const inputFocusContext = useInputFocus();
  const [lastInputFocus, setLastInputFocus] = useState<InputsIndex>();

  if (!inputsContext) {
    throw new Error("InputPalette must be in an InputsContext Provider");
  }
  const { inputs } = inputsContext;

  if (!inputFocusContext) {
    throw new Error('InputPalette must be inside an InputFocusContext Provider');
  }
  const { inputFocus } = inputFocusContext;

  const onMouseEnter = () => {
    console.log('mouseEnter', inputFocus);
    if (inputFocus !== undefined) {
      setLastInputFocus(inputFocus);
    }
  }

  const seen = new Set(inputs);
  return (
    <div className='input-options' onMouseEnter={onMouseEnter} onTouchStart={onMouseEnter}>
      {VALUES.map(value => (
        <button
          key={value}
          className={classNames('input-option', { used: seen.has(value) })}
          onClick={() => lastInputFocus !== undefined && setNumber(value, lastInputFocus)}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default InputPalette;
