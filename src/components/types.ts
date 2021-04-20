
// This files serves to create the common Types and Interfaces that components will be using

export interface CommonProps {
  className?: string;
  'aria-label'?: string;
  'data-test-subj'?: string;
}
/**
 * Returns member keys in U not present in T set to never
 * T = { 'one', 'two', 'three' }
 * U = { 'three', 'four', 'five' }
 * returns { 'four': never, 'five': never }
 */
 export type DisambiguateSet<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};

/**
 * Allow either T or U, preventing any additional keys of the other type from being present
 */
export type ExclusiveUnion<T, U> = T | U extends object // if there are any shared keys between T and U
  ? (DisambiguateSet<T, U> & U) | (DisambiguateSet<U, T> & T) // otherwise the TS union is already unique
  : T | U;

/**
 * Wraps Object.keys with proper typescript definition of the resulting array
 */
 export function keysOf<T, K extends keyof T>(obj: T): K[] {
  return Object.keys(obj) as K[];
}