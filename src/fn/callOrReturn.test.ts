const chai = require('chai')
const assert = chai.assert

import { callOrReturn } from './callOrReturn'

describe('_fn', function () {

	describe('callOrReturn()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof callOrReturn, 'function', 'Is a function')
		})

		it('Retuns val', function () {
			assert.strictEqual(callOrReturn(1), 1)
			assert.strictEqual(callOrReturn('str'), 'str')
			assert.strictEqual(callOrReturn(null), null)
		})

		it('Retuns fn result', function () {
			assert.strictEqual(callOrReturn(() => 1), 1)
			assert.strictEqual(callOrReturn(() => 'str'), 'str')
		})

		it('Retuns fn with args result', function () {
			assert.strictEqual(callOrReturn((a) => a, 1), 1)
			assert.strictEqual(callOrReturn((a) => a, 'str'), 'str')
		})

		it('Retuns fn with arbitary number of args result', function () {
			assert.strictEqual(callOrReturn((a, b, c, d) => a + b + c + d, 1, 2, 3, 4), 10)
		})
	})

})