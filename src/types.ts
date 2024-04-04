export type FixedLengthArray<T, L> = Array<T> & { length: L };

export type Inputs = FixedLengthArray<number | undefined, 9>;
export type Constraints = FixedLengthArray<number, 8>;

export type InputsIndex = keyof Inputs;
export type ConstraintsIndex = keyof Constraints;

export type ConstraintMapping = [InputsIndex, InputsIndex]
export type ConstraintMappings = FixedLengthArray<ConstraintMapping, 8>;
