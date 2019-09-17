const chai = require('chai')
const assert = chai.assert

import { fn } from './_fn'

describe('_fn', function () {

	it('callOrReturn', function () {
		assert.strictEqual(typeof fn.callOrReturn, 'function', 'Is a function')
	})

	it('curry', function () {
		assert.strictEqual(typeof fn.curry, 'function', 'Is a function')
	})

	it('maybeCall', function () {
		assert.strictEqual(typeof fn.maybeCall, 'function', 'Is a function')
	})

})