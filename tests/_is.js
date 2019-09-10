const chai = require('chai')
const assert = chai.assert

import u_is from '../src/_is'

describe('_is', function () {

	describe('isArray()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isArray, 'function', 'Is a function')
		})

		it('returns TRUE when passed an array', function () {
			assert.strictEqual(u_is.isArray([]), true, 'An empty array')
			assert.strictEqual(u_is.isArray([123, 'str', null, {},
				[]
			]), true, 'An empty array')
		})

		it('returns FALSE when not passed an array', function () {
			assert.strictEqual(u_is.isArray(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isArray(0), false, 'Zero')
			assert.strictEqual(u_is.isArray(123), false, 'Number')
			assert.strictEqual(u_is.isArray(''), false, 'Empty string')
			assert.strictEqual(u_is.isArray('str'), false, 'String')
			assert.strictEqual(u_is.isArray(null), false, 'null')
			assert.strictEqual(u_is.isArray({}), false, 'Object')
			assert.strictEqual(u_is.isArray(true), false, 'Bool - true')
		})
	})

	describe('isArrayLike()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isArrayLike, 'function', 'Is a function')
		})

		it('returns TRUE when passed an arraylike value', function () {
			assert.strictEqual(u_is.isArrayLike([]), true, 'An empty array')
			assert.strictEqual(u_is.isArrayLike('str'), true, 'A string')
		})

		it('returns False when passed a non-arraylike value', function () {
			assert.strictEqual(u_is.isArrayLike({}), false, 'An object')
			assert.strictEqual(u_is.isArrayLike(123), false, 'A number')
		})

	})

	describe('isBetween()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isBetween, 'function', 'Is a function')
		})

		it('returns TRUE when vale is in range', function () {
			assert.strictEqual(u_is.isBetween(0, 10, 5), true)
		})

		it('returns FALSE when vale is not in range', function () {
			assert.strictEqual(u_is.isBetween(0, 10, 10.1), false)
		})

	})

	describe('isBool()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isBool, 'function', 'Is a function')
		})

		it('returns TRUE when passed TRUE', function () {
			assert.strictEqual(u_is.isBool(true), true, 'true')
		})

		it('returns TRUE when passed FALSE', function () {
			assert.strictEqual(u_is.isBool(false), true, 'false')
		})

		it('returns FALSE when passed anything else', function () {
			assert.strictEqual(u_is.isBool(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isBool(0), false, 'Zero')
			assert.strictEqual(u_is.isBool(123), false, 'Number')
			assert.strictEqual(u_is.isBool(''), false, 'Empty string')
			assert.strictEqual(u_is.isBool('str'), false, 'String')
			assert.strictEqual(u_is.isBool(null), false, 'null')
			assert.strictEqual(u_is.isBool({}), false, 'Object')
			assert.strictEqual(u_is.isBool([]), false, 'array')
		})
	})

	describe('isFunction()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isFunction, 'function', 'Is a function')
		})

		it('returns TRUE when passed a function', function () {
			assert.strictEqual(u_is.isFunction(function () {}), true, 'Full fat function')
			assert.strictEqual(u_is.isFunction(() => {}), true, 'Arrow function')
		})

		it('returns FALSE when not passed a function', function () {
			assert.strictEqual(u_is.isFunction(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isFunction(true), false, 'Bool - true')
			assert.strictEqual(u_is.isFunction(0), false, 'Zero')
			assert.strictEqual(u_is.isFunction(0.123), false, 'Float')
			assert.strictEqual(u_is.isFunction(123), false, 'Integer')
			assert.strictEqual(u_is.isFunction('str'), false, 'String')
			assert.strictEqual(u_is.isFunction('123'), false, 'Int string')
			assert.strictEqual(u_is.isFunction([]), false, 'Array')
			assert.strictEqual(u_is.isFunction({}), false, 'Object')
		})
	})

	describe('isInstanceOf()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isInstanceOf, 'function', 'Is a function')
		})

		it('Returns TRUE when VALUE instanceof THING', function () {
			const THING = function () {}
			const VALUE = new THING()
			assert.strictEqual(u_is.isInstanceOf(THING, VALUE), true, 'VALUE is instance of THING()')
		})

		it('Returns FALSE when !(VALUE instanceof THING)', function () {
			const THING = function () {}
			const VALUE = 'somthingelse'
			assert.strictEqual(u_is.isInstanceOf(THING, VALUE), false, 'VALUE is NOT instance of THING()')
		})

		it('Thing as string (1)', function () {
			assert.strictEqual(u_is.isInstanceOf('Object', {}), true, 'VALUE is instance of THING()')
		})

		it('Thing as string (2)', function () {
			assert.strictEqual(u_is.isInstanceOf('Object', 'My Value'), false, 'VALUE is NOT instance of THING()')
		})

		it('returns false on made up element', function () {
			const VALUE = 'a thing'
			assert.strictEqual(u_is.isInstanceOf('made up thing', VALUE), false)
		})
	})

	describe('isInteger()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isInteger, 'function', 'Is a function')
		})

		it('Returns TRUE', function () {
			assert.strictEqual(u_is.isInteger(1), true, '1')
		})

		it('Returns FALSE', function () {
			assert.strictEqual(u_is.isInteger(1.1), false, '1.1')
		})
	})

	describe('isIterable()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isIterable, 'function', 'Is a function')
		})

		it('returns TRUE when passed an iterable', function () {
			assert.strictEqual(u_is.isIterable('string'), true, 'An array')
			assert.strictEqual(u_is.isIterable(new Array()), true, 'An empty array')
		})

		it('returns FALSE when not passed an iterable', function () {
			assert.strictEqual(u_is.isIterable(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isIterable(0), false, 'Zero')
			assert.strictEqual(u_is.isIterable(123), false, 'Number')
			assert.strictEqual(u_is.isIterable(null), false, 'null')
			assert.strictEqual(u_is.isIterable({}), false, 'Object')
			assert.strictEqual(u_is.isIterable(true), false, 'Bool - true')
		})
	})

	describe('isLength()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isLength, 'function', 'Is a function')
		})

		it('returns TRUE', function () {
			assert.strictEqual(u_is.isLength(0), true, '0')
			assert.strictEqual(u_is.isLength(100), true, '100')
		})

		it('returns FALSE', function () {
			assert.strictEqual(u_is.isLength(-1), false, '-1')
			assert.strictEqual(u_is.isLength('str'), false, '100')
		})
	})

	describe('isMap()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isMap, 'function', 'Is a function')
		})

	})

	describe('isNull())', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isUndefined, 'function', 'Is a function')
		})

		it('returns TRUE when passed valid numbers or strings', function () {
			assert.ok(u_is.isNull(null))
		})

		it('returns FALSE when passed valid numbers or strings', function () {
			assert.ok(!u_is.isNull('a value'))
			assert.ok(!u_is.isNull('null'))
			assert.ok(!u_is.isNull(0))
			assert.ok(!u_is.isNull([]))
			assert.ok(!u_is.isNull({}))
		})
	})

	describe('isNumber()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isNumber, 'function', 'Is a function')
		})

		it('returns TRUE when passed a number', function () {
			assert.strictEqual(u_is.isNumber(123), true, 'An integer')
			assert.strictEqual(u_is.isNumber(0), true, 'Zero')
			assert.strictEqual(u_is.isNumber(0.123), true, 'A float')
			assert.strictEqual(u_is.isNumber(Infinity), true, 'Infinity')
		})

		it('returns FALSE when not passed a number', function () {
			assert.strictEqual(u_is.isNumber(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isNumber('123'), false, 'Int string')
			assert.strictEqual(u_is.isNumber('0'), false, 'Zero string')
			assert.strictEqual(u_is.isNumber(''), false, 'empty string')
			assert.strictEqual(u_is.isNumber(null), false, 'null')
			assert.strictEqual(u_is.isNumber([]), false, 'Array')
			assert.strictEqual(u_is.isNumber({}), false, 'Object')
			assert.strictEqual(u_is.isNumber(true), false, 'Bool - true')
		})
	})

	describe('isNumberish()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isNumberish, 'function', 'Is a function')
		})

		it('returns TRUE when passed valid numbers or strings', function () {
			assert.ok(u_is.isNumberish(0))
			assert.ok(u_is.isNumberish(1))
			assert.ok(u_is.isNumberish(1.12345))
			assert.ok(u_is.isNumberish(0.12345))
			assert.ok(u_is.isNumberish(12345789))
			assert.ok(u_is.isNumberish('0'))
			assert.ok(u_is.isNumberish('1'))
			assert.ok(u_is.isNumberish('1.12345'))
			assert.ok(u_is.isNumberish('.12345'))
			assert.ok(u_is.isNumberish('123456789'))
			assert.ok(u_is.isNumberish('1e10000')) // infinity
			assert.ok(u_is.isNumberish('1e2'))
			assert.ok(u_is.isNumberish(12345789))
		})

		it('returns FALSE when passed valid numbers or strings', function () {
			assert.ok(!u_is.isNumberish('str'))
			assert.ok(!u_is.isNumberish('0.12d34'))
			assert.ok(!u_is.isNumberish('.'))
			assert.ok(!u_is.isNumberish('2/2'))
		})
	})

	describe('isObject()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isObject, 'function', 'Is a function')
		})

		it('returns TRUE when passed a object', function () {
			assert.strictEqual(u_is.isObject({}), true, 'Empty object')
			assert.strictEqual(u_is.isObject({
				prop1: 'test'
			}), true, 'Object with properties')
		})

		it('returns FALSE when not passed a object', function () {
			assert.strictEqual(u_is.isObject(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isObject('str'), false, 'String')
			assert.strictEqual(u_is.isObject('123'), false, 'Int string')
			assert.strictEqual(u_is.isObject(''), false, 'empty string')
			assert.strictEqual(u_is.isObject(null), false, 'null')
			assert.strictEqual(u_is.isObject([]), false, 'Array')
			assert.strictEqual(u_is.isObject(true), false, 'Bool - true')
		})
	})

	describe('isRealNaN()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isRealNaN, 'function', 'Is a function')
		})

	})

	describe('isScalar()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isScalar, 'function', 'Is a function')
		})

		it('returns TRUE when passed a scalar value', function () {
			assert.strictEqual(u_is.isScalar(true), true, 'Bool - true')
			assert.strictEqual(u_is.isScalar(false), true, 'Bool - false')
			assert.strictEqual(u_is.isScalar(0), true, 'Zero')
			assert.strictEqual(u_is.isScalar(0.123), true, 'Float')
			assert.strictEqual(u_is.isScalar(123), true, 'Integer')
			assert.strictEqual(u_is.isScalar(''), true, 'Empty string')
			assert.strictEqual(u_is.isScalar('str'), true, 'String')

		})

		it('returns FALSE when not passed a scalar value', function () {
			assert.strictEqual(u_is.isScalar(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isScalar([]), false, 'String')
			assert.strictEqual(u_is.isScalar({}), false, 'Int string')
			assert.strictEqual(u_is.isScalar(() => {}), false, 'Function')
		})
	})
	
	describe('isString()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isString, 'function', 'Is a function')
		})

		it('returns TRUE when passed a string', function () {
			assert.strictEqual(u_is.isString(''), true, 'Empty string')
			assert.strictEqual(u_is.isString('string'), true, 'String')
		})

		it('returns FALSE when not passed a string', function () {
			assert.strictEqual(u_is.isString(undefined), false, 'Nothing')
			assert.strictEqual(u_is.isString(true), false, 'Bool - true')
			assert.strictEqual(u_is.isString(0), false, 'Zero')
			assert.strictEqual(u_is.isString(0.123), false, 'Float')
			assert.strictEqual(u_is.isString(123), false, 'Integer')
			assert.strictEqual(u_is.isString([]), false, 'Array')
			assert.strictEqual(u_is.isString({}), false, 'Object')
			assert.strictEqual(u_is.isString(() => {}), false, 'Function')
		})
	})

	describe('isType()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isType, 'function', 'Is a function')
		})

		it('returns true', function () {
			assert.strictEqual(u_is.isType('string', 'a string'), true, 'Strings')
			assert.strictEqual(u_is.isType('number', 123), true, 'Number')
			assert.strictEqual(u_is.isType('boolean', true), true, 'Boolean')
			assert.strictEqual(u_is.isType('object', {}), true, 'Object')
			assert.strictEqual(u_is.isType('object', []), true, 'Object (Array)')
			assert.strictEqual(u_is.isType('object', null), true, 'Object (Null)')
		})

		it('returns false', function () {
			assert.strictEqual(u_is.isType('string', 123), false, 'Strings')
			assert.strictEqual(u_is.isType('number', '123'), false, 'Number')
			assert.strictEqual(u_is.isType('boolean', 'true'), false, 'Boolean')
			assert.strictEqual(u_is.isType('object', undefined), false, 'Object')
		})

	})

	describe('isUndefined())', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_is.isUndefined, 'function', 'Is a function')
		})

		it('returns TRUE when passed valid numbers or strings', function () {
			assert.ok(u_is.isUndefined(undefined))
		})

		it('returns FALSE when passed valid numbers or strings', function () {
			assert.ok(!u_is.isUndefined('a value'))
			assert.ok(!u_is.isUndefined('undefined'))
			assert.ok(!u_is.isUndefined(0))
			assert.ok(!u_is.isUndefined([]))
			assert.ok(!u_is.isUndefined({}))
		})
	})
})