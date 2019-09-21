const chai = require('chai')
const assert = chai.assert

import { or } from './or'

describe('or()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof or, 'function', 'Is a function')
	})

	const rT = () => true
	const rF = () => false

	it('Returns true', function () {
		assert.strictEqual(or(rT, rF, rF, rF), true, 'When passed single truthy functions')
		assert.strictEqual(or(true, false, false, false), true, 'When passed single truthy bools')
		assert.strictEqual(or(1, 0, 0, 0), true, 'When passed single truthy scalar values')
		assert.strictEqual(or(rT, rT, rF, rF), true, 'When passed multiple truthy functions')
		assert.strictEqual(or(true, true, false, false), true, 'When passed multiple truthy bools')
		assert.strictEqual(or('truthy', '', 'truthy', ''), true, 'When passed multiple truthy scalar values')
	})

	it('Returns false', function () {
		assert.strictEqual(or(rF, rF, rF), false, 'When passed single truthy functions')
		assert.strictEqual(or(false, false, false), false, 'When passed single truthy bools')
		assert.strictEqual(or(0, 0, 0), false, 'When passed single truthy scalar values')
	})

})