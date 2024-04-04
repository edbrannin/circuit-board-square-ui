import classNames from "classnames";
import { FC } from "react";

import './Constraint.css';
import { ConstraintMappings, ConstraintsIndex, Inputs } from "./types";
import useInputs from "./useInputs";
import useConstraints from "./useConstraints";
import ConstraintInput from "./ConstraintInput";

const MAPPINGS: ConstraintMappings = [
  // Upper-left
  [1, 3],
  [0, 2],
  [1, 5],

  // Left
  [0, 6],
  [2, 8],

  // Bottom-left
  [3, 7],
  [6, 8],
  [5, 7],
];

const getCurrentValue = ({ index, inputs }: {
  index: ConstraintsIndex;
  inputs: Inputs;
}) => {
  const mapping = MAPPINGS[index];
  // FIXME
  // @ts-expect-error I'm not sure why this type isn't working out
  const [i1, i2] = mapping;
  return (inputs[i1] || 0) + (inputs[i2] || 0);
}

const Constraint: FC<{
  index: number;
}> = ({ index }) => {
  const inputsContext = useInputs();
  const constraintsContext = useConstraints();

  if (!inputsContext) {
    throw new Error('Constraint must be inside an InputsContext Provider');
  }
  if (!constraintsContext) {
    throw new Error('Constraint must be inside a ConstraintsContext Provider');
  }
  const { inputs } = inputsContext;
  const { constraints } = constraintsContext;

  const targetValue = constraints[index];
  const currentValue = getCurrentValue({ index, inputs });
  const satisfied = currentValue === targetValue;
  const difference = targetValue - currentValue;

  return (
    <div className={classNames('constraint', { satisfied })}>
      <div>
        <ConstraintInput index={index} /> 
      </div>
      {!satisfied && (
        <div>({(difference > 0 && '+')}{difference})</div>
      )}
    </div>
  )
}

export default Constraint;