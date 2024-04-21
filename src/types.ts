export type FixedLengthArray<T, L> = Array<T> & { length: L };

export type Inputs = FixedLengthArray<number | undefined, 9>;
export type Constraints = FixedLengthArray<number, 8>;

// export type InputsIndex = keyof Inputs;
export type InputsIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ConstraintsIndex = keyof Constraints;

export type ConstraintMapping = [InputsIndex, InputsIndex]
export type ConstraintMappings = FixedLengthArray<ConstraintMapping, 8>;
