import { createContext, useContext } from "react"
import { InputsIndex } from "./types";

export type InputFocusProps = {
  inputFocus: InputsIndex | undefined;
  setInputFocus: React.Dispatch<React.SetStateAction<InputsIndex | undefined>>;
}

export const InputFocus = createContext<InputFocusProps | undefined>(undefined);

const useInputFocus = () => {
  return useContext(InputFocus);
}

export default useInputFocus;
