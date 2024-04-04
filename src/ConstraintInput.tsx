import classNames from 'classnames';
import useConstraints from './useConstraints';
import { Constraints } from './types';

const ConstraintInput: React.FC<{
  index: number;
  duplicate?: boolean;
}> = ({
  index,
  duplicate = false,
}) => {
  const constraintsContext = useConstraints();
  if (!constraintsContext) {
    throw new Error('AnswerConstraint must be inside an ConstraintsContext Provider');
  }
  const { constraints, setConstraints } = constraintsContext;

  const setConstraint = (value: number) => {
    if (Number.isNaN(value)) {
      return false;
    }
    const result = [...constraints] as Constraints;
    result[index] = value;
    setConstraints(result);
  }

  return (
    <input
      onFocus={(e) => e.target.select()}
      className={classNames({ duplicate })}
      onChange={e => setConstraint(Number(e.target.value))}
      value={constraints[index]}
    />
  )
};

export default ConstraintInput;
