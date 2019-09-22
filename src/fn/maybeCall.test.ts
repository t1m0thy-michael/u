const chai = require('chai')
const assert = chai.assert

import { maybeCall } from './maybeCall'

describe('maybeCall()', function () {
	
	let arr:any[] = []

	it('Is a function', function () {
		assert.strictEqual(typeof maybeCall, 'function', 'Is a function')
	})

	it('Returns function result', function () {
		assert.strictEqual(maybeCall(() => true), true)
		assert.strictEqual(maybeCall(() => 123), 123)
		assert.strictEqual(maybeCall(() => arr), arr)
	})

	it('Returns false', function () {
		assert.strictEqual(maybeCall(true), false)
		assert.strictEqual(maybeCall(123), false)
		assert.strictEqual(maybeCall(arr), false)
	})
})