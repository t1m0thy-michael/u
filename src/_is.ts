export * from './is/isArray'
export * from './is/isArrayLike'
export * from './is/isBetween'
export * from './is/isBool'
export * from './is/isFunction'
export * from './is/isInstanceOf'
export * from './is/isInteger'
export * from './is/isIterable'
export * from './is/isLength'
export * from './is/isMap'
export * from './is/isNull'
export * from './is/isNumber'
export * from './is/isNumberish'
export * from './is/isObject'
export * from './is/isRealNaN'
export * from './is/isScalar'
export * from './is/isString'
export * from './is/isType'
export * from './is/isUndefined'

import { isArray } from './is/isArray'
import { isArrayLike } from './is/isArrayLike'
import { isBetween } from './is/isBetween'
import { isBool } from './is/isBool'
import { isFunction } from './is/isFunction'
import { isInstanceOf } from './is/isInstanceOf'
import { isInteger } from './is/isInteger'
import { isIterable } from './is/isIterable'
import { isLength } from './is/isLength'
import { isMap } from './is/isMap'
import { isNull } from './is/isNull'
import { isNumber } from './is/isNumber'
import { isNumberish } from './is/isNumberish'
import { isObject } from './is/isObject'
import { isRealNaN } from './is/isRealNaN'
import { isScalar } from './is/isScalar'
import { isString } from './is/isString'
import { isType } from './is/isType'
import { isUndefined } from './is/isUndefined'

/**
 * Type and value checking. 
 * All Functions here return boolean.
 */
export const is = {
	isArray,
	isArrayLike,
	isBetween,
	isBool,
	isFunction,
	isInstanceOf,
	isInteger,
	isIterable,
	isLength,
	isMap,
	isNull,
	isNumber,
	isNumberish,
	isObject,
	isRealNaN,
	isScalar,
	isString,
	isType,
	isUndefined,
}

export default is