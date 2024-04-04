import { createContext, useContext } from "react"
import { Constraints } from "./types";

export type ConstraintsContextProps = {
  constraints: Constraints;
  setConstraints: React.Dispatch<React.SetStateAction<Constraints>>;
}

export const ConstraintsContext = createContext<ConstraintsContextProps | undefined>(undefined);

const useConstraints = () => {
  return useContext(ConstraintsContext);
}

export default useConstraints;
