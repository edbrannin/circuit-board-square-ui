import { useState } from 'react'
import './App.css'
import Board from './Board'
import { InputsContext } from './useInputs';
import { Constraints, Inputs, InputsIndex } from './types';
import { ConstraintsContext } from './useConstraints';
import InputPalette from './InputPalette';
import { InputFocus } from './useInputFocus';

const INITIAL_CONSTRAINTS: Constraints = [0, 0, 0, 0, 0, 0, 0, 0];
const INITIAL_INPUTS: Inputs = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  const [constraints, setConstraints] = useState<Constraints>(INITIAL_CONSTRAINTS);
  const [inputs, setInputs] = useState<Inputs>(INITIAL_INPUTS)
  const [inputFocus, setInputFocus] = useState<InputsIndex | undefined>(undefined);

  const reset = () => {
    setConstraints(INITIAL_CONSTRAINTS);
    setInputs(INITIAL_INPUTS);
    setInputFocus(undefined);
  }

  const loadSample = () => {
    reset();
    setConstraints([
      17, 12, 11,
      13, 6,
      12, 7, 6,
    ]);
  }

  const setNumber = (value: number, index: InputsIndex) => {
    console.log(`in setNumber(${value}, ${index})`)
    if (index !== undefined) {
      const newInputs = [
        ...inputs.slice(0, index),
        value,
        ...inputs.slice(index + 1, inputs.length),
      ] as Inputs;
      newInputs[index] = value;
      setInputs(newInputs);
    }
  }

  return (
    <>
      <h1>Circuit Board Square</h1>
      <p>
        For use with <a href="https://alexandershen.itch.io/circuit-board-square">Cuircuit Board Square</a> puzzles by <a href="https://alexandershen.itch.io/">Alexander Shen</a>
      </p>
      <InputsContext.Provider value={{ inputs, setInputs }}>
        <ConstraintsContext.Provider value={{ constraints, setConstraints }}>
          <InputFocus.Provider value={{ inputFocus, setInputFocus }}>
            <Board
              constraints={constraints}
            />
            <InputPalette setNumber={setNumber} />
          </InputFocus.Provider>
        </ConstraintsContext.Provider>
        <div className="buttons">
          <button onClick={reset}>Clear</button>
          <button onClick={loadSample}>Load Sample</button>
        </div>
      </InputsContext.Provider>
    </>
  )
}

export default App
