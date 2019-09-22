const chai = require('chai')
const assert = chai.assert

import { filter } from './filter'

describe('filter()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof filter, 'function', 'Is a function')
	})

	it('Returns a promise that resolves to an array', async function () {
		// @ts-ignore
		const result = await filter(async () => true, [1, 2, 3, 4, 5])
		assert.deepEqual(result, [1, 2, 3, 4, 5])
	})

	it('Filters the array by function', async function () {
		// @ts-ignore
		const result = await filter(async (val: number) => val > 2, [1, 2, 3, 4, 5])
		assert.deepEqual(result, [3, 4, 5])
	})
})