/**
 * Creates a duplicate-free version of an array using a transform function for comparison.
 *
 * @template T
 * @param {ArrayLike<T>} array - The array to inspect.
 * @param {(value: T) => unknown} iteratee - The transform function.
 * @returns {T[]} Returns the new duplicate-free array.
 *
 * @example
 * uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 */
declare function uniqBy<T>(array: ArrayLike<T>, iteratee: (value: T) => unknown): T[];
/**
 * Creates a duplicate-free version of an array using a property name for comparison.
 *
 * @template T
 * @param {ArrayLike<T>} array - The array to inspect.
 * @param {string} path - The property path to get values from.
 * @returns {T[]} Returns the new duplicate-free array.
 *
 * @example
 * const users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 37 }
 * ];
 * uniqBy(users, 'user');
 * // => [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }]
 */
declare function uniqBy<T>(array: ArrayLike<T>, path: string): T[];
/**
 * Creates a duplicate-free version of an array using a property index for comparison.
 *
 * @template T
 * @param {ArrayLike<T>} array - The array to inspect.
 * @param {number} index - The index to get values from.
 * @returns {T[]} Returns the new duplicate-free array.
 *
 * @example
 * const arrays = [[2], [3], [1], [2], [3], [1]];
 * uniqBy(arrays, 0);
 * // => [[2], [3], [1]]
 */
declare function uniqBy<T>(array: ArrayLike<T>, index: number): T[];
/**
 * Creates a duplicate-free version of an array, combining multiple arrays and using an optional transform function.
 *
 * @template T
 * @param {ArrayLike<T>} array - The array to inspect.
 * @param {...Array<ArrayLike<T> | ((value: T) => unknown) | string>} values - Additional arrays and/or iteratee.
 * @returns {T[]} Returns the new duplicate-free array.
 *
 * @example
 * uniqBy([1, 2], [2, 3], [3, 4], Math.floor);
 * // => [1, 2, 3, 4]
 */
declare function uniqBy<T>(array: ArrayLike<T> | null | undefined, ...values: Array<ArrayLike<T> | ((value: T) => unknown) | string>): T[];

export { uniqBy };
