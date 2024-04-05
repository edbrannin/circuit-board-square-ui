import { FC } from "react";
import GridItem from "./GridItem"
import Grid from "./Grid";
import AnswerInput from "./AnswerInput";
import useInputs from "./useInputs";
import Constraint from "./Constraint";
import useInputFocus from "./useInputFocus";
import classNames from "classnames";

const findDuplicates = <T,>(items: T[], alwaysReturn?: T[]): Set<T> => {
  let duplicates = new Set<T>(alwaysReturn || []);
  let seen = new Set<T>();
  items.forEach(item => {
    if (seen.has(item)) {
      duplicates = duplicates.add(item);
    } else {
      seen = seen.add(item);
    }
  })
  return duplicates;
}

const Board: FC<{
  constraints: number[];
}> = ({
  constraints,
}) => {
  const inputContext = useInputs();
  const inputFocusContext = useInputFocus();

  if (!inputContext) {
    throw new Error('Board must be inside an InputsContext Provider');
  }
  const { inputs } = inputContext;

  if (!inputFocusContext) {
    throw new Error('Board must be inside an InputFocusContext Provider');
  }
  const { inputFocus } = inputFocusContext;


  if (constraints.length !== 8) {
    return (
      <div>Invalid Constraints: {JSON.stringify(constraints)}</div>
    );
  }
  if (inputs.length !== 9) {
    return (
      <div>Invalid inputs: {JSON.stringify(inputs)}</div>
    );
  }

  const duplicateInputs = findDuplicates(inputs, [0]);

  return (
    <div className={classNames("board", { [`focus-${String(inputFocus)}`]: inputFocus !== undefined })}>
      <Grid>
        <GridItem><Constraint index={0} /></GridItem>
        <GridItem><Constraint index={1} /></GridItem>
        <GridItem><Constraint index={2} /></GridItem>
        <GridItem><Constraint index={3} /></GridItem>
        <GridItem>
          <Grid>
            {inputs.map((value, place) => (
              <GridItem key={place}>
                <AnswerInput
                  index={place}
                  duplicate={duplicateInputs.has(value)}
                />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem><Constraint index={4} /></GridItem>
        <GridItem><Constraint index={5} /></GridItem>
        <GridItem><Constraint index={6} /></GridItem>
        <GridItem><Constraint index={7} /></GridItem>
      </Grid>
    </div>
  )
};

export default Board;
