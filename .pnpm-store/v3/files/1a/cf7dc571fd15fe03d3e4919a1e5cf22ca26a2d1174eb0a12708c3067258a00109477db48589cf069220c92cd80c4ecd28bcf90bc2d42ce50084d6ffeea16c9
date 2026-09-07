'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const rangeRight = require('../_chunk/rangeRight-w3WrXN.js');
const randomInt = require('../_chunk/randomInt-CF7bZK.js');

function round(value, precision = 0) {
    if (!Number.isInteger(precision)) {
        throw new Error('Precision must be an integer.');
    }
    const multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
}

function sumBy(items, getValue) {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
        result += getValue(items[i]);
    }
    return result;
}

exports.clamp = rangeRight.clamp;
exports.inRange = rangeRight.inRange;
exports.mean = rangeRight.mean;
exports.meanBy = rangeRight.meanBy;
exports.median = rangeRight.median;
exports.medianBy = rangeRight.medianBy;
exports.range = rangeRight.range;
exports.rangeRight = rangeRight.rangeRight;
exports.sum = rangeRight.sum;
exports.random = randomInt.random;
exports.randomInt = randomInt.randomInt;
exports.round = round;
exports.sumBy = sumBy;
