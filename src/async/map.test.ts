const chai = require('chai')
const assert = chai.assert

import { map } from './map'

describe('map()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof map, 'function', 'Is a function')
	})

	it('Returns a promise. Resolves with mapped array.', async function () {
		const arr = [1, 2, 3, 4, 5]
		const mapFn = async (val: number): Promise<number> => val + 1
		const result = await map(mapFn, arr)
		assert.deepEqual(result, [2, 3, 4, 5, 6])
		// @ts-ignore
		assert.ok(result !== arr)
	})

	it('Passes index as second arg of callback', async function () {
		const arr = [1, 2, 3, 4, 5]
		const mapFn = async (val: number, idx: number): Promise<number> => val + idx
		const result = await map(mapFn, arr)
		assert.deepEqual(result, [1, 3, 5, 7, 9])
	})
})