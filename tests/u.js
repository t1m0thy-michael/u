const chai = require('chai')
const assert = chai.assert

import u from '../src/index'

describe('u.js', function () {

	describe('isArray()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isArray, 'function', 'Is a function')
		})

		it('returns TRUE when passed an array', function () {
			assert.strictEqual(u.isArray([]), true, 'An empty array')
			assert.strictEqual(u.isArray([123, 'str', null, {},
				[]
			]), true, 'An empty array')
		})

		it('returns FALSE when not passed an array', function () {
			assert.strictEqual(u.isArray(undefined), false, 'Nothing')
			assert.strictEqual(u.isArray(0), false, 'Zero')
			assert.strictEqual(u.isArray(123), false, 'Number')
			assert.strictEqual(u.isArray(''), false, 'Empty string')
			assert.strictEqual(u.isArray('str'), false, 'String')
			assert.strictEqual(u.isArray(null), false, 'null')
			assert.strictEqual(u.isArray({}), false, 'Object')
			assert.strictEqual(u.isArray(true), false, 'Bool - true')
		})
	})

	describe('isBool()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isBool, 'function', 'Is a function')
		})

		it('returns TRUE when passed TRUE', function () {
			assert.strictEqual(u.isBool(true), true, 'true')
		})

		it('returns TRUE when passed FALSE', function () {
			assert.strictEqual(u.isBool(false), true, 'false')
		})

		it('returns FALSE when passed anything else', function () {
			assert.strictEqual(u.isBool(undefined), false, 'Nothing')
			assert.strictEqual(u.isBool(0), false, 'Zero')
			assert.strictEqual(u.isBool(123), false, 'Number')
			assert.strictEqual(u.isBool(''), false, 'Empty string')
			assert.strictEqual(u.isBool('str'), false, 'String')
			assert.strictEqual(u.isBool(null), false, 'null')
			assert.strictEqual(u.isBool({}), false, 'Object')
			assert.strictEqual(u.isBool([]), false, 'array')
		})
	})

	describe('isIterable()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isIterable, 'function', 'Is a function')
		})

		it('returns TRUE when passed an iterable', function () {
			assert.strictEqual(u.isIterable('string'), true, 'An array')
			assert.strictEqual(u.isIterable(new Array()), true, 'An empty array')
		})

		it('returns FALSE when not passed an iterable', function () {
			assert.strictEqual(u.isIterable(undefined), false, 'Nothing')
			assert.strictEqual(u.isIterable(0), false, 'Zero')
			assert.strictEqual(u.isIterable(123), false, 'Number')
			assert.strictEqual(u.isIterable(null), false, 'null')
			assert.strictEqual(u.isIterable({}), false, 'Object')
			assert.strictEqual(u.isIterable(true), false, 'Bool - true')
		})
	})

	describe('isNumber()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isNumber, 'function', 'Is a function')
		})

		it('returns TRUE when passed a number', function () {
			assert.strictEqual(u.isNumber(123), true, 'An integer')
			assert.strictEqual(u.isNumber(0), true, 'Zero')
			assert.strictEqual(u.isNumber(0.123), true, 'A float')
			assert.strictEqual(u.isNumber(Infinity), true, 'Infinity')
		})

		it('returns FALSE when not passed a number', function () {
			assert.strictEqual(u.isNumber(undefined), false, 'Nothing')
			assert.strictEqual(u.isNumber('123'), false, 'Int string')
			assert.strictEqual(u.isNumber('0'), false, 'Zero string')
			assert.strictEqual(u.isNumber(''), false, 'empty string')
			assert.strictEqual(u.isNumber(null), false, 'null')
			assert.strictEqual(u.isNumber([]), false, 'Array')
			assert.strictEqual(u.isNumber({}), false, 'Object')
			assert.strictEqual(u.isNumber(true), false, 'Bool - true')
		})
	})

	describe('isNumberish()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isNumberish, 'function', 'Is a function')
		})

		it('returns TRUE when passed valid numbers or strings', function () {
			assert.ok(u.isNumberish(0))
			assert.ok(u.isNumberish(1))
			assert.ok(u.isNumberish(1.12345))
			assert.ok(u.isNumberish(0.12345))
			assert.ok(u.isNumberish(12345789))
			assert.ok(u.isNumberish('0'))
			assert.ok(u.isNumberish('1'))
			assert.ok(u.isNumberish('1.12345'))
			assert.ok(u.isNumberish('.12345'))
			assert.ok(u.isNumberish('123456789'))
			assert.ok(u.isNumberish('1e10000')) // infinity
			assert.ok(u.isNumberish('1e2'))
			assert.ok(u.isNumberish(12345789))
		})

		it('returns FALSE when passed valid numbers or strings', function () {
			assert.ok(!u.isNumberish('str'))
			assert.ok(!u.isNumberish('0.12d34'))
			assert.ok(!u.isNumberish('.'))
			assert.ok(!u.isNumberish('2/2'))
		})
	})

	describe('isUndefined())', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isUndefined, 'function', 'Is a function')
		})

		it('returns TRUE when passed valid numbers or strings', function () {
			assert.ok(u.isUndefined(undefined))
		})

		it('returns FALSE when passed valid numbers or strings', function () {
			assert.ok(!u.isUndefined('a value'))
			assert.ok(!u.isUndefined('undefined'))
			assert.ok(!u.isUndefined(0))
			assert.ok(!u.isUndefined([]))
			assert.ok(!u.isUndefined({}))
		})
	})

	describe('isNull())', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isUndefined, 'function', 'Is a function')
		})

		it('returns TRUE when passed valid numbers or strings', function () {
			assert.ok(u.isNull(null))
		})

		it('returns FALSE when passed valid numbers or strings', function () {
			assert.ok(!u.isNull('a value'))
			assert.ok(!u.isNull('null'))
			assert.ok(!u.isNull(0))
			assert.ok(!u.isNull([]))
			assert.ok(!u.isNull({}))
		})
	})

	describe('isObject()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isObject, 'function', 'Is a function')
		})

		it('returns TRUE when passed a object', function () {
			assert.strictEqual(u.isObject({}), true, 'Empty object')
			assert.strictEqual(u.isObject({
				prop1: 'test'
			}), true, 'Object with properties')
		})

		it('returns FALSE when not passed a object', function () {
			assert.strictEqual(u.isObject(undefined), false, 'Nothing')
			assert.strictEqual(u.isObject('str'), false, 'String')
			assert.strictEqual(u.isObject('123'), false, 'Int string')
			assert.strictEqual(u.isObject(''), false, 'empty string')
			assert.strictEqual(u.isObject(null), false, 'null')
			assert.strictEqual(u.isObject([]), false, 'Array')
			assert.strictEqual(u.isObject(true), false, 'Bool - true')
		})
	})

	describe('isScalar()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isScalar, 'function', 'Is a function')
		})

		it('returns TRUE when passed a scalar value', function () {
			assert.strictEqual(u.isScalar(true), true, 'Bool - true')
			assert.strictEqual(u.isScalar(false), true, 'Bool - false')
			assert.strictEqual(u.isScalar(0), true, 'Zero')
			assert.strictEqual(u.isScalar(0.123), true, 'Float')
			assert.strictEqual(u.isScalar(123), true, 'Integer')
			assert.strictEqual(u.isScalar(''), true, 'Empty string')
			assert.strictEqual(u.isScalar('str'), true, 'String')

		})

		it('returns FALSE when not passed a scalar value', function () {
			assert.strictEqual(u.isScalar(undefined), false, 'Nothing')
			assert.strictEqual(u.isScalar([]), false, 'String')
			assert.strictEqual(u.isScalar({}), false, 'Int string')
			assert.strictEqual(u.isScalar(() => {}), false, 'Function')
		})
	})

	describe('isString()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isString, 'function', 'Is a function')
		})

		it('returns TRUE when passed a string', function () {
			assert.strictEqual(u.isString(''), true, 'Empty string')
			assert.strictEqual(u.isString('string'), true, 'String')
		})

		it('returns FALSE when not passed a string', function () {
			assert.strictEqual(u.isString(undefined), false, 'Nothing')
			assert.strictEqual(u.isString(true), false, 'Bool - true')
			assert.strictEqual(u.isString(0), false, 'Zero')
			assert.strictEqual(u.isString(0.123), false, 'Float')
			assert.strictEqual(u.isString(123), false, 'Integer')
			assert.strictEqual(u.isString([]), false, 'Array')
			assert.strictEqual(u.isString({}), false, 'Object')
			assert.strictEqual(u.isString(() => {}), false, 'Function')
		})
	})

	describe('isFunction()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isFunction, 'function', 'Is a function')
		})

		it('returns TRUE when passed a function', function () {
			assert.strictEqual(u.isFunction(function () {}), true, 'Full fat function')
			assert.strictEqual(u.isFunction(() => {}), true, 'Arrow function')
		})

		it('returns FALSE when not passed a function', function () {
			assert.strictEqual(u.isFunction(undefined), false, 'Nothing')
			assert.strictEqual(u.isFunction(true), false, 'Bool - true')
			assert.strictEqual(u.isFunction(0), false, 'Zero')
			assert.strictEqual(u.isFunction(0.123), false, 'Float')
			assert.strictEqual(u.isFunction(123), false, 'Integer')
			assert.strictEqual(u.isFunction('str'), false, 'String')
			assert.strictEqual(u.isFunction('123'), false, 'Int string')
			assert.strictEqual(u.isFunction([]), false, 'Array')
			assert.strictEqual(u.isFunction({}), false, 'Object')
		})
	})

	describe('isInstanceOf()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.isInstanceOf, 'function', 'Is a function')
		})

		it('Returns TRUE when VALUE instanceof THING', function () {
			const THING = function () {}
			const VALUE = new THING()
			// @ts-ignore
			assert.strictEqual(u.isInstanceOf(THING, VALUE), true, 'VALUE is instance of THING()')
		})

		it('Returns FALSE when !(VALUE instanceof THING)', function () {
			const THING = function () {}
			const VALUE = 'somthingelse'
			// @ts-ignore
			assert.strictEqual(u.isInstanceOf(THING, VALUE), false, 'VALUE is NOT instance of THING()')
		})

		it('Thing as string (1)', function () {
			assert.strictEqual(u.isInstanceOf('Object', {}), true, 'VALUE is instance of THING()')
		})

		it('Thing as string (2)', function () {
			assert.strictEqual(u.isInstanceOf('Object', 'My Value'), false, 'VALUE is NOT instance of THING()')
		})

		it('returns false on made up element', function () {
			const VALUE = 'a thing'
			assert.strictEqual(u.isInstanceOf('made up thing', VALUE), false)
		})
	})

	describe('isType()', function () {


		it('Is a function', function () {
			assert.strictEqual(typeof u.isType, 'function', 'Is a function')
		})

		it('returns true', function () {
			assert.strictEqual(u.isType('string', 'a string'), true, 'Strings')
			assert.strictEqual(u.isType('number', 123), true, 'Number')
			assert.strictEqual(u.isType('boolean', true), true, 'Boolean')
			assert.strictEqual(u.isType('object', {}), true, 'Object')
			assert.strictEqual(u.isType('object', []), true, 'Object (Array)')
			assert.strictEqual(u.isType('object', null), true, 'Object (Null)')
		})

		it('returns false', function () {
			assert.strictEqual(u.isType('string', 123), false, 'Strings')
			assert.strictEqual(u.isType('number', '123'), false, 'Number')
			assert.strictEqual(u.isType('boolean', 'true'), false, 'Boolean')
			assert.strictEqual(u.isType('object', undefined), false, 'Object')
		})

	})

	describe('makeSureItsAnArray()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.makeSureItsAnArray, 'function', 'Is a function')
		})

		it('Always returns an array', function () {
			assert.deepStrictEqual(u.makeSureItsAnArray(undefined), [], 'Nothing')
			assert.deepStrictEqual(u.makeSureItsAnArray(null), [null], 'null')
			assert.deepStrictEqual(u.makeSureItsAnArray(123), [123], 'Number')
			assert.deepStrictEqual(u.makeSureItsAnArray('test'), ['test'], 'String')
			assert.deepStrictEqual(u.makeSureItsAnArray(['test']), ['test'], '[\'String\']')

			const myIterable = {
				*[Symbol.iterator]() {
					yield 1
					yield 2
					yield 3
				}
			}

			assert.deepStrictEqual(u.makeSureItsAnArray(myIterable), [1, 2, 3], '[\'Custom iterable object\']')

		})
	})

	describe('every()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.every, 'function', 'Is a function')
		})

		it('Returns true when condition function returns true for every element', function () {
			let result = u.every(() => true, [1, 2, 3, 4, 5])
			assert.ok(result, 'Returns true when test function returns true for every element')
		})

		it('Returns false when condition function returns true for every element', function () {
			let result = u.every(() => false, [1, 2, 3, 4, 5])
			assert.ok(!result, 'Returns false when test function returns false for every element')
		})

	})

	// describe('intersection()', function () {

	// 	it('Is a function', function () {
	// 		assert.strictEqual(typeof u.intersection, 'function', 'Is a function')
	// 	})

	// 	it('Array of ints', function () {
	// 		let result = u.intersection([-1, 0, 1, 2, 3, 4, 5], [-1, 0, 3, 5, 6, 7])
	// 		assert.deepStrictEqual(result, [-1, 0, 3, 5], 'Arrays of Integers')
	// 	})

	// 	it('Array of strings', function () {
	// 		let result = u.intersection(['hello', 'world'], ['goodby', 'world'])
	// 		assert.deepStrictEqual(result, ['world'], 'Arrays of strings')
	// 	})
	// })

	describe('unique()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.unique, 'function', 'Is a function')
		})

		it('Maxed Array', function () {
			let result = u.unique([-1, 0, 1, 'a', null, 2, 3, 4, 5], [-1, 0, 0.5, 1, 3, 5, 6, 7, 'a', null, 'b'])
			assert.deepStrictEqual(result, [-1, 0, 1, 'a', null, 2, 3, 4, 5, 0.5, 6, 7, 'b'], 'Arrays of Integers')
		})
	})

	describe('cleanArray()', function () {

		let testArray

		it('Is a function', function () {
			assert.strictEqual(typeof u.cleanArray, 'function', 'Is a function')
		})

		describe('creans by functions', function () {
			beforeEach(() => {
				testArray = [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test1', 'test2',
					undefined, undefined,
					NaN
				]
			})

			it('Removes all and only nulls from array', function () {
				let result = u.cleanArray((val) => (val === null), testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					'test1', 'test2',
					undefined, undefined,
					NaN
				])
			})

			it('Removes all and only undefineds from array', function () {
				let result = u.cleanArray((val) => (val === undefined), testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test1', 'test2',
					NaN
				])
			})

			it('Removes all and only zeros from array', function () {
				let result = u.cleanArray((val) => (val === 0), testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5,
					null, null,
					'test1', 'test2',
					undefined, undefined,
					NaN
				])
			})

			it('Removes all and only exact strings from array', function () {
				let result = u.cleanArray((val) => (val === 'test1'), testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test2',
					undefined, undefined,
					NaN
				])
			})
		})

		describe('cleans by value', function () {
			beforeEach(() => {
				testArray = [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test1', 'test2',
					undefined, undefined,
					NaN
				]
			})

			it('Removes all and only nulls from array', function () {
				let result = u.cleanArray(null, testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					'test1', 'test2',
					undefined, undefined,
					NaN
				])
			})

			it('Removes all and only undefineds from array', function () {
				let result = u.cleanArray(undefined, testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test1', 'test2',
					NaN
				])
			})

			it('Removes all and only zeros from array', function () {
				let result = u.cleanArray(0, testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5,
					null, null,
					'test1', 'test2',
					undefined, undefined,
					NaN
				])
			})

			it('Removes all and only exact strings from array', function () {
				let result = u.cleanArray('test1', testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test2',
					undefined, undefined,
					NaN
				])
			})

			it('Removes all instances of NaN from array', function () {
				let result = u.cleanArray(NaN, testArray)
				assert.deepStrictEqual(result, [
					1, 2, 3, 4, 5, 0,
					null, null,
					'test1', 'test2',
					undefined, undefined
				])
			})
		})
	})

	describe('equal', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.equal, 'function', 'Is a function')
		})

		it('returns true', function () {
			assert.strictEqual(u.equal('str', 'str'), true, 'strings')
			assert.strictEqual(u.equal(123, 123), true, 'number')

			const testObj1 = {
				a: 1,
				b: [1, 2, 3],
				c: {
					q: 'w',
					w: 'e',
					e: 'r'
				}
			}
			const testObj2 = {
				a: 1,
				b: [1, 2, 3],
				c: {
					q: 'w',
					w: 'e',
					e: 'r'
				}
			}

			assert.strictEqual(u.equal(testObj1, testObj2), true, 'objects')
		})

		it('returns false', function () {
			assert.strictEqual(u.equal('str', 'string'), false, 'strings')
			assert.strictEqual(u.equal(123, '123'), false, 'number')

			const testObj1 = {
				a: 1,
				b: [0, 2, 3],
				c: {
					q: 'w',
					w: 'e',
					e: 'r'
				}
			}
			const testObj2 = {
				a: 1,
				b: [1, 2, 3],
				c: {
					q: 'w',
					w: 'e',
					e: 'r'
				}
			}

			assert.strictEqual(u.equal(testObj1, testObj2), false, 'objects')
		})


	})

	describe('clone()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.clone, 'function', 'Is a function')
		})

		it('Clones objects', function () {
			let testObj = {
				test1: 1,
				test2: {
					test3: 3
				}
			}
			let resultObj = u.clone(testObj)
			assert.deepStrictEqual(resultObj, testObj, 'Clones nested object')
			assert.notStrictEqual(resultObj, testObj, 'Clone, not ==')
		})

		it('Clones arrays', function () {
			let testArr = [1, 2, [3]]
			let resultArr = u.clone(testArr)
			assert.deepStrictEqual(resultArr, testArr, 'Clones nested object')
			assert.notStrictEqual(resultArr, testArr, 'Clone, not ==')
		})
	})

	describe('sizeOf()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.sizeOf, 'function', 'Is a function')
		})

		it('Correctly reports size of string', function () {
			assert.strictEqual(u.sizeOf('test string'), 11, 'Length 11')
			assert.strictEqual(u.sizeOf(''), 0, 'Length 0')
		})

		it('Correctly reports size of array', function () {
			let testArr = [1, 2, 3, 4, 5]
			testArr['test'] = 0
			assert.strictEqual(u.sizeOf(testArr), 5, 'Length 5')
			assert.strictEqual(u.sizeOf([]), 0, 'Length 0')
		})

		it('Correctly reports size of object', function () {
			let testObj = {
				test: 1,
				test2: 0,
				test3: 12345
			}
			assert.strictEqual(u.sizeOf(testObj), 3, 'Length 3')
			assert.strictEqual(u.sizeOf({}), 0, 'Length 0')
		})

		it('Reports size of number as 0', function () {
			let test = 123456
			assert.strictEqual(u.sizeOf(test), 0, 'Length 0')
		})
	})

	describe('get()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.get, 'function', 'Is a function')
		})

		it('Gets correct value from 1st dimension', function () {
			let test = {
				test1: 1,
				test2: 2,
				test3: 3
			}
			assert.strictEqual(u.get(test, ['test1']), 1, 'Return 1')
		})

		it('Gets correct value from 2nd dimension', function () {
			let test = {
				test1: 1,
				test2: {
					test4: 4,
					test5: 5
				},
				test3: 3
			}
			assert.strictEqual(u.get(test, ['test2', 'test5']), 5, 'Return 5')
		})

		it('Gets correct value from 3rd dimension', function () {
			let test = {
				test1: 1,
				test2: {
					test4: {
						test6: 6,
						test7: 7
					},
					test5: 5
				},
				test3: 3
			}
			assert.strictEqual(u.get(test, ['test2', 'test4', 'test7']), 7, 'Return 7')
		})

		it('Will return object', function () {
			let test = {
				test1: 1,
				test2: {
					test4: {
						test6: 6,
						test7: 7
					},
					test5: 5
				},
				test3: 3
			}
			assert.deepStrictEqual(u.get(test, ['test2', 'test4']), {
				test6: 6,
				test7: 7
			}, 'Return 7')
		})

		it('Returns undefined for non-existant path (undefined)', function () {
			assert.strictEqual(u.get(undefined, ['test2', 'test5', 'test7']), undefined, 'Return undefined')
		})

		it('Returns undefined for non-existant path (1st dimension)', function () {
			let test = {
				test1: 1
			}
			assert.strictEqual(u.get(test, ['test2', 'test5', 'test7']), undefined, 'Return undefined')
		})

		it('Returns undefined for non-existant path (3rd dimension)', function () {
			let test = {
				test1: 1,
				test2: {
					test4: {
						test6: 6,
						test7: 7
					},
					test5: 5
				},
				test3: 3
			}
			assert.strictEqual(u.get(test, ['test2', 'test5', 'test7']), undefined, 'Return undefined')
		})

		it('Returns undefined when key empty', function () {
			let test = {
				test1: 1,
				test2: {
					test4: {
						test6: 6,
						test7: 7
					},
					test5: 5
				},
				test3: 3
			}
			assert.strictEqual(u.get(test, []), undefined, 'Return undefined')
		})

		it('Returns undefined when key undefined', function () {
			let test = {
				test1: 1,
				test2: {
					test4: {
						test6: 6,
						test7: 7
					},
					test5: 5
				},
				test3: 3
			}
			assert.strictEqual(u.get(test, undefined), undefined, 'Return undefined')
		})

		it('Returns undefined when obj undefined', function () {
			assert.strictEqual(u.get(undefined, ['test1, test2']), undefined, 'Return undefined')
		})
	})

	describe('set()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.set, 'function', 'Is a function')
		})

		it('Sets new value in the 1st dimension', function () {
			let test = {
				test1: 1,
				test2: 2,
				test3: 3
			}
			u.set(test, ['test4'], 4)
			assert.deepStrictEqual(test, {
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 4
			}, 'Sets new value (1)')
		})

		it('Updates value in the 1st dimension', function () {
			let test = {
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 4
			}
			u.set(test, ['test4'], 5)
			assert.deepStrictEqual(test, {
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 5
			}, 'Updates value')
		})

		it('Sets new value in the 2nd dimension (existing  1st dimension key)', function () {
			let test = {
				test1: 1,
				test2: {
					test4: 4,
					test5: 5
				},
				test3: 3,
				test6: {}
			}
			u.set(test, ['test6', 'test7'], 7)
			assert.deepStrictEqual(test, {
				test1: 1,
				test2: {
					test4: 4,
					test5: 5
				},
				test3: 3,
				test6: {
					test7: 7
				}
			}, 'Sets new value (2)')
		})

		it('Sets new value in the 2nd dimension (new 1st dimension key)', function () {
			let test = {
				test1: 1,
				test2: {
					test4: 4,
					test5: 5
				},
				test3: 3
			}
			u.set(test, ['test6', 'test7'], 7)
			assert.deepStrictEqual(test, {
				test1: 1,
				test2: {
					test4: 4,
					test5: 5
				},
				test3: 3,
				test6: {
					test7: 7
				}
			}, 'Sets new value (2)')
		})
	})

	describe('async.forEach()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.async.forEach, 'function', 'Is a function')
		})

		it('Returns promise', function () {
			assert.ok(u.async.forEach([], () => {}) instanceof Promise)
		})

		it('Does loop right, passing val and idx', async function () {
			let test = [1, 2, 3, 4]
			let result = []
			let shouldEqual = [0, 2, 6, 12]
			await u.async.forEach((val, idx) => result.push(val * idx), test)
			assert.deepStrictEqual(result, shouldEqual)
			assert.notStrictEqual(test, result)
		})
	})

	describe('async.map()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.async.map, 'function', 'Is a function')
		})

		it('Returns promise', function () {
			assert.ok(u.async.map(() => {}, []) instanceof Promise)
		})

		it('Does loop right, passing val and idx', async function () {
			let test = [1, 2, 3, 4]
			let shouldEqual = [0, 2, 6, 12]
			let result = await u.async.map((val, idx) => val * idx, test)
			assert.deepStrictEqual(result, shouldEqual)
			assert.deepStrictEqual(result, shouldEqual)
		})
	})

	describe('async.filter()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.async.filter, 'function', 'Is a function')
		})

		it('Returns promise', function () {
			assert.ok(u.async.filter(() => {}, []) instanceof Promise)
		})

		it('Does loop right, passing val and idx', async function () {
			let test = [1, 2, 3, 4]
			let shouldEqual = [2, 4]
			let result = await u.async.filter((val) => val % 2 === 0, test)
			assert.deepStrictEqual(result, shouldEqual)
			assert.deepStrictEqual(result, shouldEqual)
		})
	})

	describe('async.delay()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.async.delay, 'function', 'Is a function')
		})

		it('Returns promise', function (done) {
			assert.ok(u.async.delay(0.1) instanceof Promise)
			done()
		})
	})

	describe('curry()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.curry, 'function', 'Is a function')
		})

		it('Returns a function that accepts a single argument', function () {
			let fn = u.curry((a, b, c) => a + b + c)
			assert.ok(u.isFunction(fn), 'Returned a function...')
			assert.strictEqual(fn.length, 1, 'Returned function expects single argument')
		})

		it('Returns expected results - simple chain', function () {
			let fn = u.curry((a, b, c) => a + b + c)
			assert.strictEqual(fn(1)(1)(1), 3, 'Returned 3')
			assert.strictEqual(fn(1)(2)(3), 6, 'Returned 6')
		})

		it('Returns expected results - reuse second stage', function () {
			let fn = u.curry((a, b, c) => a + b + c)
			let a = fn(1)
			let b = a(1)
			let c = b(1)
			assert.strictEqual(c, 3, 'First use returns 3')
			assert.strictEqual(b(2), 4, 'Reuse stage 2')
			assert.strictEqual(b(-1), 1, 'Reuse 2nd stage again')
		})

		it('Returns expected results - len argument and optional parameters', function () {
			let fn = u.curry((a, b, c = 666) => a + b + c, 3)
			let a = fn(1)
			let b = a(1)
			let c = b(1)
			assert.strictEqual(c, 3, 'First use returns 3')
			assert.strictEqual(b(2), 4, 'Reuse stage 2')
			assert.strictEqual(b(-1), 1, 'Reuse 2nd stage again')
		})
	})

	describe('randomNumber()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.randomNumber, 'function', 'Is a function')
		})

		it('Retuns a number', function () {
			assert.strictEqual(typeof u.randomNumber(), 'number')
		})

		it('Retuns a number between default min (0) and default max (10)', function () {
			for (let i = 0; i < 100; i++) {
				let result = u.randomNumber()
				assert.ok((0 <= result && 10 >= result))
			}
		})

		it('Retuns a number between min and max', function () {
			for (let i = 0; i < 100; i++) {
				let result = u.randomNumber(19, 21)
				assert.ok((19 <= result && 21 >= result))
			}
		})
	})

	describe('randomInt()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.randomInt, 'function', 'Is a function')
		})

		it('Retuns a number', function () {
			assert.strictEqual(typeof u.randomInt(), 'number')
		})

		it('Retuns a number between default min (0) and default max (10)', function () {
			for (let i = 0; i < 100; i++) {
				let result = u.randomInt()
				assert.ok((0 <= result && 10 >= result))
			}
		})

		it('Always returns an integer', function () {
			for (let i = 0; i < 100; i++) {
				let result = u.randomInt()
				// @ts-ignore
				assert.strictEqual(result, parseInt(result), 'Integer')
			}
		})

		it('Retuns a number between min and max', function () {
			for (let i = 0; i < 100; i++) {
				let result = u.randomInt(29, 39)
				assert.ok((29 <= result && 39 >= result))
			}
		})
	})

	describe('makeID()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.makeID, 'function', 'Is a function')
		})

		it('Retuns a string', function () {
			assert.strictEqual(typeof u.makeID(), 'string')
		})

		it('Retuns a string of default length', function () {
			assert.strictEqual((u.makeID()).length, 8)
		})

		it('Retuns a string of length', function () {
			assert.strictEqual((u.makeID(10)).length, 10)
		})
	})

	describe('randomColor()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u.randomColour, 'function', 'Is a function')
		})

		it('Retuns a string', function () {
			assert.strictEqual(typeof u.randomColour(), 'string')
		})

		it('Retuns a valid string', function () {
			assert.ok(/^#[0-9a-f]{6}$/i.test(u.randomColour()), 'Valid string')
		})
	})
})