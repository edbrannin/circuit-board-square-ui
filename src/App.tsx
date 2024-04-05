import { useState } from 'react'
import './App.css'
import Board from './Board'
import { InputsContext } from './useInputs';
import { Constraints, Inputs } from './types';
import { ConstraintsContext } from './useConstraints';
import InputPalette from './InputPalette';

function App() {
  const [constraints, setConstraints] = useState<Constraints>([99, 99, 99, 99, 99, 99, 99, 99]);
  const [inputs, setInputs] = useState<Inputs>([0, 0, 0, 0, 0, 0, 0, 0, 0])

  return (
    <>
      <h1>Circuit Board Square</h1>
      <p>
        For use with <a href="https://alexandershen.itch.io/circuit-board-square">Cuircuit Board Square</a> puzzles by <a href="https://alexandershen.itch.io/">Alexander Shen</a>
      </p>
      <InputsContext.Provider value={{ inputs, setInputs }}>
        <ConstraintsContext.Provider value={{ constraints, setConstraints }}>
          <Board
            constraints={constraints}
          />
        </ConstraintsContext.Provider>
        <InputPalette />
      </InputsContext.Provider>
    </>
  )
}

export default App
