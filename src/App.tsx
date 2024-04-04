import { useState } from 'react'
import './App.css'
import Board from './Board'
import { InputsContext } from './useInputs';
import { Constraints, Inputs } from './types';
import { ConstraintsContext } from './useConstraints';
import InputPalette from './InputPalette';

function App() {
  // const [count, setCount] = useState(0)

  const [constraints, setConstraints] = useState<Constraints>([99, 99, 99, 99, 99, 99, 99, 99]);
  const [inputs, setInputs] = useState<Inputs>([0, 0, 0, 0, 0, 0, 0, 0, 0])

  return (
    <>
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
