import classNames from "classnames";
import useInputs from "./useInputs"
import './InputPalette.css'

const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const InputPalette = () => {
  const inputsContext = useInputs();
  if (!inputsContext) {
    throw new Error("InputPalette must be in an InputsContext Provider");
  }
  const { inputs } = inputsContext;

  const seen = new Set(inputs);
  return (
    <div className='input-options'>
      {VALUES.map(value => (
        <div
          key={value}
          className={classNames('input-option', { used: seen.has(value) })}
        >
          {value}
        </div>
      ))}
    </div>
  )
}

export default InputPalette;
