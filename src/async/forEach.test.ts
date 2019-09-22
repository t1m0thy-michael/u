const chai = require('chai')
const assert = chai.assert

import { forEach } from './forEach'

describe('forEach()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof forEach, 'function', 'Is a function')
	})

	it('Returns undefined', async function () {
		// @ts-ignore
		const result = await forEach(async () => true, [1, 2, 3, 4, 5])
		assert.deepEqual(result, undefined)
	})

	it('Calls fn for each element', async function () {
		let called = 0
		await forEach(async (val: number) => called += val, [1, 2, 3, 4, 5])
		assert.deepEqual(called, 15)
	})
})