import { flatten } from './flatten.mjs';
import { last } from './last.mjs';
import { uniq } from '../../array/uniq.mjs';
import { uniqBy as uniqBy$1 } from '../../array/uniqBy.mjs';
import { isArrayLikeObject } from '../predicate/isArrayLikeObject.mjs';
import { iteratee } from '../util/iteratee.mjs';

function uniqBy(arr, ...values) {
    if (!isArrayLikeObject(arr)) {
        return [];
    }
    const iteratee$1 = last(values);
    if (iteratee$1 === undefined) {
        return Array.from(arr);
    }
    const validArrays = values.slice(0, -1).filter(isArrayLikeObject);
    const flattenedArrays = flatten(validArrays);
    const allValues = [...Array.from(arr), ...flattenedArrays];
    if (isArrayLikeObject(iteratee$1)) {
        return uniq(allValues);
    }
    return uniqBy$1(allValues, iteratee(iteratee$1));
}

export { uniqBy };
