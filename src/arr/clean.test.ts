const chai = require('chai')
const assert = chai.assert

import { clean } from './clean'

describe('clean()', function () {

	let testArray: any[]

	it('Is a function', function () {
		assert.strictEqual(typeof clean, 'function', 'Is a function')
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
			let result = clean((val: any) => (val === null), testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5, 0,
				'test1', 'test2',
				undefined, undefined,
				NaN
			])
		})

		it('Removes all and only undefineds from array', function () {
			let result = clean((val: any) => (val === undefined), testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5, 0,
				null, null,
				'test1', 'test2',
				NaN
			])
		})

		it('Removes all and only zeros from array', function () {
			let result = clean((val: any) => (val === 0), testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5,
				null, null,
				'test1', 'test2',
				undefined, undefined,
				NaN
			])
		})

		it('Removes all and only exact strings from array', function () {
			let result = clean((val: any) => (val === 'test1'), testArray)
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
			let result = clean(null, testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5, 0,
				'test1', 'test2',
				undefined, undefined,
				NaN
			])
		})

		it('Removes all and only undefineds from array', function () {
			let result = clean(undefined, testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5, 0,
				null, null,
				'test1', 'test2',
				NaN
			])
		})

		it('Removes all and only zeros from array', function () {
			let result = clean(0, testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5,
				null, null,
				'test1', 'test2',
				undefined, undefined,
				NaN
			])
		})

		it('Removes all and only exact strings from array', function () {
			let result = clean('test1', testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5, 0,
				null, null,
				'test2',
				undefined, undefined,
				NaN
			])
		})

		it('Removes all instances of NaN from array', function () {
			let result = clean(NaN, testArray)
			assert.deepStrictEqual(result, [
				1, 2, 3, 4, 5, 0,
				null, null,
				'test1', 'test2',
				undefined, undefined
			])
		})
	})

})