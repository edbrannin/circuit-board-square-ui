import { createContext, useContext } from "react"
import { Inputs } from "./types";

export type InputsContextProps = {
  inputs: Inputs;
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>;
}

export const InputsContext = createContext<InputsContextProps | undefined>(undefined);

const useInputs = () => {
  return useContext(InputsContext);
}

export default useInputs;
