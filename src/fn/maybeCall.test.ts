const chai = require('chai')
const assert = chai.assert

import { maybeCall } from './maybeCall'

describe('_fn', function () {

	describe('maybeCall()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof maybeCall, 'function', 'Is a function')
		})
	})
})