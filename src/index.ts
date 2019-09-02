// Type checking
import isArray from './isArray'
import isArrayLike from './isArrayLike'
import isIterable from './isIterable'
import isNumber from './isNumber'
import isNumberish from './isNumberish'
import isObject from './isObject'
import isScalar from './isScalar'
import isString from './isString'
import isFunction from './isFunction'
import isInstanceOf from './isInstanceOf'
import isType from './isType'
import isUndefined from './isUndefined'
import isNull from './isNull'
import isRealNaN from './isRealNaN'
import isBool from './isBool'

// Array functions
import makeSureItsAnArray from './makeSureItsAnArray'
import every from './every'
import unique from './unique'
import previous from './previous'
import next from './next'

// object functions
import sizeOf from './sizeOf'
import get from './get'
import set from './set'
import decycle from './decycle'
import undecycle from './undecycle'

// async
import forEach from './asyncForEach'
import map from './asyncMap'
import filter from './asyncFilter'
import delay from './asyncDelay'

// number
import randomNumber from './randomNumber'
import randomInt from './randomInt'

// string
import insert from './insert'
import remove from './remove'
import makeID from './makeID'

// util
import curry from './curry'

// handy
import randomColour from './randomColour'

export default {
	// type checking
	isArray,
	isArrayLike,
	isIterable,
	isNumber,
	isNumberish,
	isObject,
	isScalar,
	isString,
	isFunction,
	isInstanceOf,
	isType,
	isUndefined,
	isNull,
	isRealNaN,
	isBool,
	// array
	makeSureItsAnArray,
	every,
	unique,
	previous,
	next,
	async: {
		forEach,
		map,
		filter,
		delay,
	},
	// object
	sizeOf,
	get,
	set,
	decycle,
	undecycle,
	// number
	randomNumber,
	randomInt,
	// string
	insert,
	remove,
	makeID,
	// utility
	curry,
	// handy
	randomColour,
}