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

const INPUT_TAB_ORDER = [
  0, 1, 2, 3,
  5, 6, 7, 8,
  4
];

const CONSTRAINT_ORDER = [
  0, 1, 2, 3,
  4, 5, 6, 7,
];

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
        {CONSTRAINT_ORDER.map((index) => (
          <GridItem key={index}><Constraint index={index} /></GridItem>
        ))}

        <GridItem>
          <Grid>
            {INPUT_TAB_ORDER.map((place) => (
              <GridItem key={place}>
                <AnswerInput
                  index={place}
                  duplicate={duplicateInputs.has(inputs[place])}
                />
              </GridItem>
            ))}
          </Grid>
        </GridItem>

      </Grid>
    </div>
  )
};

export default Board;
