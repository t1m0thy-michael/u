const chai = require('chai')
const assert = chai.assert

import { getCacheKey } from './cache_key'

describe('getCacheKey()', function () {

	it('Is a function', function () {
		assert.isFunction(getCacheKey, 'Is a function')
	})

	it('Retuns a string', function () {
		assert.isString(((...args: any[]) => getCacheKey(args))(undefined), 'undefined')
		assert.isString(((...args: any[]) => getCacheKey(args))(null), 'null')
		assert.isString(((...args: any[]) => getCacheKey(args))(1, 2, 3), 'numbers')
		assert.isString(((...args: any[]) => getCacheKey(args))('str', 123, null, true), 'mixed')
	})
	
	it('Keys objects correctly', function () {

		const myObj1 = {a: 1, b: 'str', c: true}

		const objKeyStr1 = ((...args: any[]) => getCacheKey(args))(myObj1, myObj1, myObj1)
		assert.isString(objKeyStr1, 'myObj1')
		assert.strictEqual(objKeyStr1, 'o_1o_1o_1', 'Is expected string for re-used object (1)')

		const objKeyStr2 = ((...args: any[]) => getCacheKey(args))(myObj1)
		assert.isString(objKeyStr2, 'myObj1')
		assert.strictEqual(objKeyStr2, 'o_1', 'Is expected string for re-used object (2)')

		const myObj2 = { a: 1, b: 'str', c: true }
		const objKeyStr3 = ((...args: any[]) => getCacheKey(args))(myObj1, myObj2)
		assert.isString(objKeyStr3, 'myObj1')
		assert.strictEqual(objKeyStr3, 'o_1o_2', 'Is expected string for re-used object (2)')
	})	

	it('keys functions correctly', function () {
		
		// this test is dependant on the previous object tests above. 
		// expexcted object/function keys are sequential
		// [whine]"but tests shouldn't be depandant on each other...". 
		// Shut up.

		const fn1 = () => true
		const fn2 = () => true
		const fn3 = () => () => 1
		const fn4 = fn3()
		const fn5 = fn3()

		assert.strictEqual(getCacheKey([fn1]), 'o_3')
		assert.strictEqual(getCacheKey([fn2]), 'o_4')
		assert.strictEqual(getCacheKey([fn3]), 'o_5')
		assert.strictEqual(getCacheKey([fn4]), 'o_6')
		assert.strictEqual(getCacheKey([fn5]), 'o_7')

	})
})