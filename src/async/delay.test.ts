const chai = require('chai')
const assert = chai.assert

import { delay } from './delay'

describe('delay()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof delay, 'function', 'Is a function')
	})

	it('Returns a promise. Resolves true.', function (done) {
		delay(0)
			.then((result) => assert.strictEqual(result, true))
			.finally(done)
	})
})